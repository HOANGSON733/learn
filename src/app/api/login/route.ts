import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

// Đặt biến này trong file .env.local: SESSION_SECRET=chuoi-bi-mat-cua-ban
// KHÔNG commit secret thật lên Git.
const SESSION_SECRET = process.env.SESSION_SECRET ?? "dev-only-secret-change-me";

type User = {
    id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    createdAt: string;
};

async function readUsers(): Promise<User[]> {
    try {
        const raw = await fs.readFile(USERS_FILE, "utf-8");
        return JSON.parse(raw) as User[];
    } catch (err: any) {
        if (err.code === "ENOENT") return [];
        throw err;
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body as { email?: string; password?: string };

        if (!email || !password) {
            return NextResponse.json(
                { message: "Vui lòng nhập email và mật khẩu." },
                { status: 400 }
            );
        }

        const users = await readUsers();
        const user = users.find(
            (u) => u.email.toLowerCase() === email.toLowerCase()
        );

        // Không tiết lộ email có tồn tại hay không -> tránh dò email
        if (!user) {
            return NextResponse.json(
                { message: "Email hoặc mật khẩu không đúng." },
                { status: 401 }
            );
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) {
            return NextResponse.json(
                { message: "Email hoặc mật khẩu không đúng." },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { sub: user.id, email: user.email, fullName: user.fullName },
            SESSION_SECRET,
            { expiresIn: "7d" }
        );

        const { passwordHash: _omit, ...safeUser } = user;

        const res = NextResponse.json(
            { message: "Đăng nhập thành công.", user: safeUser },
            { status: 200 }
        );

        res.cookies.set("session_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 ngày
        });

        return res;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Đã xảy ra lỗi, vui lòng thử lại." },
            { status: 500 }
        );
    }
}