import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const highlights = [
    {
        title: "Bắt đầu nhanh",
        description:
            "Thiết lập môi trường, cài dependencies, chạy project và nắm cấu trúc thư mục trong vài phút.",
    },
    {
        title: "Kiến trúc hệ thống",
        description:
            "Mô tả rõ cách tổ chức layout, component, route, state, data fetching và các lớp xử lý nghiệp vụ.",
    },
    {
        title: "API & tích hợp",
        description:
            "Danh sách endpoint, payload mẫu, quy ước đặt tên, mã lỗi và ví dụ tích hợp thực tế.",
    },
    {
        title: "Quy ước phát triển",
        description:
            "Style guide, convention cho naming, cấu trúc file, quy trình review và checklist khi merge code.",
    },
];

const sections = [
    {
        title: "1. Tổng quan dự án",
        content:
            "Khu vực này đóng vai trò là trung tâm tài liệu của hệ thống. Mục tiêu là giúp người mới có thể hiểu nhanh dự án đang làm gì, các module chính hoạt động ra sao và đâu là nơi bắt đầu phù hợp nhất.",
    },
    {
        title: "2. Hướng dẫn khởi động",
        content:
            "Bao gồm các bước cài đặt môi trường, biến môi trường cần thiết, lệnh chạy dev, build production và các lưu ý khi chuyển sang staging hoặc production.",
    },
    {
        title: "3. Quy trình làm việc",
        content:
            "Mô tả luồng làm việc tiêu chuẩn: tạo nhánh, phát triển tính năng, kiểm tra lỗi, chạy test, review và phát hành. Điều này giúp đội ngũ duy trì chất lượng ổn định.",
    },
    {
        title: "4. Tài liệu tham khảo",
        content:
            "Nơi tập hợp các link hữu ích như API reference, database schema, design system, ví dụ component, và những ghi chú kỹ thuật quan trọng khác.",
    },
];

export default function DocLayout() {
    return (
        <section className="mx-auto flex min-h-[70vh] w-full flex-col px-6 py-16 sm:px-10 lg:px-12">
            <div className="mb-8 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Documentation Center
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
                <div className="space-y-8">
                    <div className="max-w-3xl space-y-5">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
                            Tài liệu hướng dẫn đầy đủ cho dự án
                        </h1>

                        <p className="text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                            Đây là trung tâm thông tin cho toàn bộ hệ thống, nơi tập hợp các
                            hướng dẫn quan trọng nhất để hỗ trợ quá trình phát triển, triển
                            khai và bảo trì. Nội dung ở đây có thể mở rộng cho onboarding,
                            kiến trúc, API, quy trình làm việc, và mọi ghi chú kỹ thuật cần
                            được chuẩn hóa cho cả team.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <Card key={item.title}>
                                <CardContent className="p-5">
                                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                Nội dung tài liệu chính
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                {sections.map((section) => (
                                    <article
                                        key={section.title}
                                        className="rounded-xl bg-slate-50 p-5 dark:bg-zinc-800"
                                    >
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                                            {section.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            {section.content}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                            Gợi ý những mục nên có
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <li>• Hướng dẫn cài đặt và chạy dự án lần đầu.</li>
                            <li>• Giải thích cấu trúc thư mục và vai trò từng layer.</li>
                            <li>• Danh sách route, component, và trang quan trọng.</li>
                            <li>• Tài liệu API với ví dụ request/response rõ ràng.</li>
                            <li>• Quy ước code, lint, format và cách đặt tên.</li>
                            <li>• Checklist release, test và troubleshooting phổ biến.</li>
                        </ul>

                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:bg-zinc-800 dark:text-slate-300">
                            Nếu bạn muốn, mình có thể tiếp tục biến trang này thành một bố cục
                            tài liệu thật sự, có sidebar mục lục, search, badge trạng thái, code
                            block mẫu và các section chi tiết hơn nữa.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}