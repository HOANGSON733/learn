"use client";

import googleIcon from "@/src/assets/Google_Favicon_2025.svg";
import { LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const socialProviders = [
    {
        name: "Google",
        icon: "google",
        label: "Google",
        href: "/api/auth/signin/google",
        iconProps: {
            src: googleIcon,
            alt: "Google",
            width: 20,
            height: 20,
        },
    },
    {
        name: "GitHub",
        icon: FaGithub,
        label: "GitHub",
        href: "/api/auth/signin/github",
    },
];

export default function LoginLayout() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center px-6 py-6 sm:px-10 lg:px-12">
            <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.10)] dark:border-slate-800 dark:bg-zinc-950 lg:grid-cols-2">
                <div className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white sm:p-10 lg:p-12">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_35%)]" />

                    <div className="relative space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#30e070de] px-4 py-2 text-sm font-medium backdrop-blur">
                            <Sparkles className="h-4 w-4" />
                            Chào mừng quay lại
                        </div>

                        <div className="max-w-xl space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Đăng nhập để tiếp tục sử dụng hệ thống
                            </h1>
                            <p className="max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                                Bạn có thể đăng nhập bằng tài khoản cơ bản, hoặc dùng Google và GitHub để truy cập nhanh hơn.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                "Đăng nhập email và mật khẩu",
                                "Đăng nhập nhanh bằng Google",
                                "Đăng nhập nhanh bằng GitHub",
                                "Tối ưu cho cả desktop và mobile",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12">
                    <div className="w-full max-w-md space-y-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                                <ShieldCheck className="h-4 w-4" />
                                Đăng nhập an toàn
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                                Chọn phương thức đăng nhập
                            </h2>
                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                Dùng form cơ bản hoặc đăng nhập bằng mạng xã hội. Mình đã dựng sẵn UI để bạn nối backend sau.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-2.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-800 dark:bg-zinc-900 dark:text-white dark:focus:border-slate-600"
                                />
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Mật khẩu
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Nhập mật khẩu"
                                        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-800 dark:bg-zinc-900 dark:text-white dark:focus:border-slate-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((value) => !value)}
                                        className="absolute inset-y-0 right-0 px-4 text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                    >
                                        {showPassword ? "Ẩn" : "Hiện"}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 text-sm">
                                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                                    Ghi nhớ đăng nhập
                                </label>
                                <a href="#" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                                    Quên mật khẩu?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                Đăng nhập
                            </button>
                        </form>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-200 dark:border-slate-800" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-400">
                                <span className="bg-white px-3 dark:bg-zinc-950">Hoặc tiếp tục với</span>
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {socialProviders.map((provider) => {
                                const Icon = provider.icon;

                                return (
                                    <a
                                        key={provider.name}
                                        href={provider.href}
                                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-zinc-900 dark:text-slate-200 dark:hover:border-slate-700"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center rounded-xl overflow-hidden">
                                            {provider.name === "Google" ? (
                                                <img
                                                    src={provider.iconProps?.src.src}
                                                    alt={provider.iconProps?.alt}
                                                    width={provider.iconProps?.width}
                                                    height={provider.iconProps?.height}
                                                />
                                            ) : (
                                                <Icon className="h-5 w-5" />
                                            )}
                                        </span>
                                        <span>{provider.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
                            <div className="flex items-start gap-3">
                                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0" />
                                <p>
                                    Để form đăng nhập hoạt động thực sự, bạn cần nối `onSubmit` với API đăng nhập của dự án.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}