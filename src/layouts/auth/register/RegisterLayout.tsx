"use client";
import { signIn } from "next-auth/react";
import googleIcon from "@/src/assets/Google_Favicon_2025.svg";
import { LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const socialProviders = [
    {
        name: "Google",
        icon: "google",
        label: "Google",
        provider: "google",
        // href: "/api/auth/signin/google",
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

export default function RegisterLayout() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setServerError("");
        setSuccessMessage("");

        if (password.length < 8) {
            setPasswordError("Mật khẩu phải có ít nhất 8 ký tự.");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Mật khẩu nhập lại không khớp.");
            return;
        }

        setPasswordError("");
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setServerError(data.message ?? "Đăng ký thất bại, vui lòng thử lại.");
                return;
            }

            // Đăng ký xong -> tự động đăng nhập luôn bằng chính email/password vừa nhập
            const loginRes = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (loginRes?.error) {
                // Tài khoản đã tạo thành công nhưng tự đăng nhập thất bại
                // -> đưa người dùng sang trang login để tự đăng nhập
                setSuccessMessage("Đăng ký thành công! Vui lòng đăng nhập.");
                router.push("/login");
                return;
            }

            router.push("/");
            router.refresh();
        } catch (err) {
            console.error(err);
            setServerError("Không thể kết nối máy chủ, vui lòng thử lại.");
        } finally {
            setIsSubmitting(false);
        }
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
                                Đăng ký để tiếp tục sử dụng hệ thống
                            </h1>
                            <p className="max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                                Bạn có thể đăng ký bằng tài khoản cơ bản, hoặc dùng Google và GitHub để truy cập nhanh hơn.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                "Đăng ký email và mật khẩu",
                                "Đăng ký nhanh bằng Google",
                                "Đăng ký nhanh bằng GitHub",
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

                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <div className="space-y-2.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    autoComplete="name"
                                    placeholder="Nguyễn Văn A"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-800 dark:bg-zinc-900 dark:text-white dark:focus:border-slate-600"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="Nhập mật khẩu"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (passwordError) setPasswordError("");
                                        }}
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
                            <div className="space-y-2.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Nhập lại mật khẩu
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        placeholder="Nhập lại mật khẩu"
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                            if (passwordError) setPasswordError("");
                                        }}
                                        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-800 dark:bg-zinc-900 dark:text-white dark:focus:border-slate-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((value) => !value)}
                                        className="absolute inset-y-0 right-0 px-4 text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                    >
                                        {showConfirmPassword ? "Ẩn" : "Hiện"}
                                    </button>
                                </div>
                                {passwordError && (
                                    <p className="text-xs font-medium text-red-600 dark:text-red-400">
                                        {passwordError}
                                    </p>
                                )}
                            </div>

                            {serverError && (
                                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                                    {serverError}
                                </p>
                            )}
                            {successMessage && (
                                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    {successMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
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
                                    <button
                                        key={provider.name}
                                        type="button"
                                        onClick={() =>
                                            signIn(provider.provider, {
                                                callbackUrl: "/",
                                            })
                                        }
                                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-zinc-900 dark:text-slate-200 dark:hover:border-slate-700"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-xl">
                                            {provider.name === "Google" ? (
                                                <img
                                                    src={provider.iconProps?.src.src}
                                                    alt={provider.iconProps?.alt}
                                                    width={provider.iconProps?.width}
                                                    height={provider.iconProps?.height}
                                                />
                                            ) : (
                                                <provider.icon className="h-5 w-5" />
                                            )}
                                        </span>

                                        <span>{provider.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                            Bạn có tài khoản rồi?{" "}
                            <Link
                                href="/login"
                                className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                            >
                                Đăng nhập
                            </Link>
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
                            <div className="flex items-start gap-3">
                                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0" />
                                <p>
                                    Để form đăng ký hoạt động thực sự, bạn cần nối `onSubmit` với API đăng ký của dự án.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}