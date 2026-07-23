import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";

// console.log("GOOGLE_CLIENT_ID =", process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE_CLIENT_SECRET =", process.env.GOOGLE_CLIENT_SECRET);

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

type StoredUser = {
    id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    createdAt: string;
};

async function readUsers(): Promise<StoredUser[]> {
    try {
        const raw = await fs.readFile(USERS_FILE, "utf-8");
        return JSON.parse(raw) as StoredUser[];
    } catch (err: any) {
        if (err.code === "ENOENT") return [];
        throw err;
    }
}

const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const email = credentials?.email as string | undefined;
                const password = credentials?.password as string | undefined;

                if (!email || !password) return null;

                const users = await readUsers();
                const user = users.find(
                    (u) => u.email.toLowerCase() === email.toLowerCase()
                );
                if (!user) return null;

                const isValid = await bcrypt.compare(password, user.passwordHash);
                if (!isValid) return null;

                // Object trả về đây sẽ được đưa vào callback jwt() ở param "user"
                return {
                    id: user.id,
                    name: user.fullName,
                    email: user.email,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.id) {
                (session.user as typeof session.user & { id: string }).id =
                    token.id as string;
            }
            return session;
        },
    },
});

export const { GET, POST } = handlers;
export { signIn, signOut, auth };