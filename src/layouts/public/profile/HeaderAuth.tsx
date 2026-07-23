"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";


export default function HeaderAuth() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Link
                href="/login"
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
            >
                Login
            </Link>
        );
    }

    return (
        <div className="flex items-center cursor-pointer justify-between gap-3">
            <Link href="/profile" className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage
                        src={session.user?.image ?? ""}
                        alt={session.user?.name ?? "User"}
                    />
                    <AvatarFallback>
                        {session.user?.name?.charAt(0).toUpperCase() ?? "U"}
                    </AvatarFallback>
                </Avatar>

                <span className="font-medium">
                    {session.user?.name}
                </span>
            </Link>
        </div>
    );
}