"use client";

import { useRouter } from "next/navigation";

const termsSections = [
    {
        title: "1. Chấp nhận điều khoản",
        content:
            "Khi truy cập hoặc sử dụng website, bạn đồng ý tuân thủ các điều khoản này. Nếu không đồng ý với bất kỳ nội dung nào, vui lòng ngừng sử dụng dịch vụ.",
    },
    {
        title: "2. Phạm vi sử dụng dịch vụ",
        content:
            "Bạn được phép sử dụng dịch vụ cho mục đích hợp pháp, phù hợp với quy định hiện hành và không xâm phạm quyền của bất kỳ cá nhân hay tổ chức nào khác.",
    },
    {
        title: "3. Tài khoản và bảo mật",
        content:
            "Nếu dịch vụ yêu cầu tài khoản, bạn có trách nhiệm bảo mật thông tin đăng nhập, mọi hoạt động phát sinh từ tài khoản của bạn và thông báo ngay khi phát hiện rủi ro bảo mật.",
    },
    {
        title: "4. Nội dung người dùng",
        content:
            "Bạn chịu trách nhiệm đối với nội dung do mình đăng tải, chia sẻ hoặc cung cấp. Chúng tôi có quyền gỡ bỏ nội dung vi phạm quy định, pháp luật hoặc ảnh hưởng đến trải nghiệm người dùng khác.",
    },
    {
        title: "5. Quyền sở hữu trí tuệ",
        content:
            "Toàn bộ giao diện, mã nguồn, logo, thương hiệu và nội dung thuộc về chúng tôi hoặc bên cấp phép hợp pháp. Bạn không được sao chép, chỉnh sửa hoặc khai thác trái phép nếu chưa có sự cho phép bằng văn bản.",
    },
    {
        title: "6. Giới hạn trách nhiệm",
        content:
            "Chúng tôi nỗ lực duy trì dịch vụ ổn định nhưng không cam kết hệ thống luôn không gián đoạn, không lỗi hoặc hoàn toàn phù hợp với mọi mục đích sử dụng của từng người dùng.",
    },
];

const highlights = [
    "Sử dụng dịch vụ đúng mục đích và tuân thủ pháp luật.",
    "Tôn trọng quyền sở hữu trí tuệ và nội dung của nền tảng.",
    "Bảo mật tài khoản cá nhân nếu có sử dụng tính năng đăng nhập.",
    "Chúng tôi có thể cập nhật điều khoản khi cần để phản ánh thay đổi của dịch vụ.",
];

export default function TermsAndConditionsLayout() {
    const router = useRouter();

    return (
        <main className="mx-auto min-h-[70vh] w-full px-6 py-14 sm:px-10 lg:px-12">
            <button
                type="button"
                onClick={() => router.back()}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-800 dark:bg-zinc-900 dark:text-slate-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
                <span aria-hidden="true">←</span>
                Quay lại
            </button>

            <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-linear-to-br from-white via-slate-50 to-emerald-50 shadow-sm dark:border-slate-800 dark:from-zinc-950 dark:via-slate-950 dark:to-emerald-950/40">
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.85fr] lg:p-12">
                    <div className="space-y-6">
                        <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300">
                            Terms & Conditions
                        </div>

                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                                Điều khoản sử dụng
                            </h1>
                            <p className="text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                                Vui lòng đọc kỹ các điều khoản này trước khi sử dụng dịch vụ.
                                Việc tiếp tục truy cập đồng nghĩa với việc bạn đã hiểu và đồng ý
                                với các quy định được nêu bên dưới.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-slate-800">
                                Cập nhật: 11/07/2026
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-slate-800">
                                Áp dụng cho toàn bộ người dùng
                            </span>
                        </div>
                    </div>

                    <aside className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-zinc-900/80">
                        <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                            Điểm cần lưu ý
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {highlights.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="mt-8 grid gap-5 lg:grid-cols-2">
                {termsSections.map((section) => (
                    <article
                        key={section.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-zinc-900"
                    >
                        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                            {section.title}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {section.content}
                        </p>
                    </article>
                ))}
            </section>

            <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Liên hệ hỗ trợ
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Nếu bạn có câu hỏi về điều khoản sử dụng hoặc cần làm rõ bất kỳ nội dung nào,
                    vui lòng liên hệ với chúng tôi qua email
                    <a
                        href="mailto:saigoncodon52@gmail.com"
                        className="ml-1 font-medium text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300"
                    >
                        saigoncodon52@gmail.com
                    </a>
                    . Chúng tôi sẽ phản hồi trong thời gian sớm nhất có thể.
                </p>
            </section>
        </main>
    );
}