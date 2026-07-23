import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { auth } from "@/auth";

const USERS_FILE = path.join(process.cwd(), "data", "users.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "avatars");

type StoredUser = {
    id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    createdAt: string;
    image?: string | null;
};

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

async function readUsers(): Promise<StoredUser[]> {
    try {
        const raw = await fs.readFile(USERS_FILE, "utf-8");
        return JSON.parse(raw) as StoredUser[];
    } catch (err: any) {
        if (err.code === "ENOENT") return [];
        throw err;
    }
}

async function writeUsers(users: StoredUser[]) {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json(
                { message: "Bạn cần đăng nhập để đổi ảnh đại diện." },
                { status: 401 }
            );
        }

        const userId = (session.user as { id?: string }).id;
        if (!userId) {
            return NextResponse.json(
                { message: "Không tìm thấy tài khoản. Vui lòng đăng nhập lại." },
                { status: 400 }
            );
        }

        const formData = await req.formData();
        const file = formData.get("avatar");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { message: "Vui lòng chọn một ảnh." },
                { status: 400 }
            );
        }

        if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
                { message: "Chỉ chấp nhận ảnh PNG, JPEG, WEBP hoặc GIF." },
                { status: 400 }
            );
        }

        if (file.size > MAX_SIZE_BYTES) {
            return NextResponse.json(
                { message: "Ảnh không được vượt quá 5MB." },
                { status: 400 }
            );
        }

        const users = await readUsers();
        const userIndex = users.findIndex((u) => u.id === userId);

        if (userIndex === -1) {
            return NextResponse.json(
                { message: "Không tìm thấy tài khoản." },
                { status: 404 }
            );
        }

        await fs.mkdir(UPLOAD_DIR, { recursive: true });

        const ext = file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1];
        const fileName = `${userId}-${Date.now()}.${ext}`;
        const filePath = path.join(UPLOAD_DIR, fileName);

        const arrayBuffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(arrayBuffer));

        const publicUrl = `/uploads/avatars/${fileName}`;

        users[userIndex].image = publicUrl;
        await writeUsers(users);

        return NextResponse.json(
            { message: "Cập nhật ảnh đại diện thành công.", image: publicUrl },
            { status: 200 }
        );
    } catch (error) {
        console.error("Avatar upload error:", error);
        return NextResponse.json(
            { message: "Đã xảy ra lỗi, vui lòng thử lại." },
            { status: 500 }
        );
    }
}