"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const policySections = [
    {
        title: "1. Thông tin chúng tôi thu thập",
        content:
            "Chúng tôi có thể thu thập các thông tin bạn cung cấp trực tiếp như họ tên, email, số điện thoại, nội dung liên hệ, cũng như dữ liệu kỹ thuật như địa chỉ IP, loại trình duyệt, thiết bị và hành vi sử dụng dịch vụ.",
    },
    {
        title: "2. Cách chúng tôi sử dụng thông tin",
        content:
            "Thông tin được sử dụng để vận hành dịch vụ, phản hồi yêu cầu hỗ trợ, cá nhân hóa trải nghiệm, cải thiện sản phẩm, gửi thông báo quan trọng và đảm bảo an toàn cho hệ thống.",
    },
    {
        title: "3. Cookie và công nghệ tương tự",
        content:
            "Website có thể sử dụng cookie để ghi nhớ tùy chọn, phân tích lưu lượng truy cập và nâng cao hiệu suất. Bạn có thể điều chỉnh cài đặt cookie trong trình duyệt, tuy nhiên một số tính năng có thể hoạt động không đầy đủ.",
    },
    {
        title: "4. Chia sẻ thông tin",
        content:
            "Chúng tôi không bán dữ liệu cá nhân của bạn. Thông tin chỉ được chia sẻ khi cần thiết với nhà cung cấp dịch vụ đáng tin cậy, khi có yêu cầu pháp lý hoặc để bảo vệ quyền lợi hợp pháp của người dùng và hệ thống.",
    },
    {
        title: "5. Bảo mật dữ liệu",
        content:
            "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp nhằm bảo vệ thông tin khỏi truy cập trái phép, mất mát, lạm dụng hoặc thay đổi ngoài ý muốn.",
    },
    {
        title: "6. Quyền của bạn",
        content:
            "Bạn có quyền yêu cầu truy cập, chỉnh sửa, xóa hoặc hạn chế xử lý dữ liệu cá nhân của mình. Bạn cũng có thể rút lại sự đồng ý đối với các hoạt động xử lý dựa trên sự đồng ý bất cứ lúc nào.",
    },
];

const summaryItems = [
    "Minh bạch về dữ liệu được thu thập và mục đích sử dụng.",
    "Không bán thông tin cá nhân cho bên thứ ba.",
    "Cho phép người dùng yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu.",
    "Ưu tiên bảo mật và giảm thiểu dữ liệu không cần thiết.",
];

export default function PrivacyPolicyLayout() {
    const router = useRouter();

    useEffect(() => {
        const privacyPolicy = localStorage.getItem("privacyPolicy");
        if (!privacyPolicy) {
            localStorage.setItem("privacyPolicy", "true");
        }
    }, []);

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

            <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 shadow-sm dark:border-slate-800 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/40">
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.85fr] lg:p-12">
                    <div className="space-y-6">
                        <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/60 dark:text-blue-300">
                            Privacy Policy
                        </div>

                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                                Chính sách bảo mật thông tin
                            </h1>
                            <p className="text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                                Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ
                                thông tin cá nhân trong quá trình bạn truy cập, sử dụng website
                                và các dịch vụ liên quan.
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
                            Tóm tắt cam kết
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {summaryItems.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="mt-8 grid gap-5 lg:grid-cols-2">
                {policySections.map((section) => (
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
                    Liên hệ về quyền riêng tư
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Nếu bạn có câu hỏi về chính sách này hoặc muốn thực hiện các quyền liên
                    quan đến dữ liệu cá nhân, vui lòng liên hệ với chúng tôi qua email
                    <a
                        href="mailto:saigoncodon52@gmail.com"
                        className="ml-1 font-medium text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
                    >
                        saigoncodon52@gmail.com
                    </a>
                    . Chúng tôi sẽ phản hồi trong thời gian sớm nhất có thể.
                </p>
            </section>
        </main>
    );
}