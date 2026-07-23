import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SESSION_SECRET = process.env.SESSION_SECRET ?? "dev-only-secret-change-me";

export type SessionPayload = {
    sub: string;
    email: string;
    fullName: string;
};

// Dùng trong Server Component hoặc Route Handler để lấy user đang đăng nhập
export async function getSession(): Promise<SessionPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("session_token")?.value;

    if (!token) return null;

    try {
        const payload = jwt.verify(token, SESSION_SECRET) as SessionPayload;
        return payload;
    } catch {
        return null;
    }
}