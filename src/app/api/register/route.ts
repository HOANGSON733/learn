import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

// File lưu danh sách tài khoản. Có thể đổi sang thư mục khác nếu cần.
const USERS_FILE = path.join(process.cwd(), "data", "users.json");

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
        // Nếu file chưa tồn tại, tạo mới với mảng rỗng
        if (err.code === "ENOENT") {
            await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
            await fs.writeFile(USERS_FILE, "[]", "utf-8");
            return [];
        }
        throw err;
    }
}

async function writeUsers(users: User[]) {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, email, password } = body as {
            fullName?: string;
            email?: string;
            password?: string;
        };

        if (!fullName || !email || !password) {
            return NextResponse.json(
                { message: "Vui lòng nhập đầy đủ thông tin." },
                { status: 400 }
            );
        }

        if (password.length < 8) {
            return NextResponse.json(
                { message: "Mật khẩu phải có ít nhất 8 ký tự." },
                { status: 400 }
            );
        }

        const users = await readUsers();

        const emailExists = users.some(
            (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        if (emailExists) {
            return NextResponse.json(
                { message: "Email này đã được đăng ký." },
                { status: 409 }
            );
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser: User = {
            id: randomUUID(),
            fullName,
            email,
            passwordHash,
            createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        await writeUsers(users);

        // Không bao giờ trả passwordHash về client
        const { passwordHash: _omit, ...safeUser } = newUser;

        return NextResponse.json(
            { message: "Đăng ký thành công.", user: safeUser },
            { status: 201 }
        );
    } catch (error) {
        console.error("Register error:", error);
        return NextResponse.json(
            { message: "Đã xảy ra lỗi, vui lòng thử lại." },
            { status: 500 }
        );
    }
}