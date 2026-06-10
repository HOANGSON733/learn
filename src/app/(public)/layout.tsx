import HeaderLayout from "@/src/components/layout/header/HeaderLayout";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HeaderLayout />
            <main className="flex flex-1 w-full max-w-7xl mx-auto flex-col items-center justify-between py-32 px-16 bg-white dark:bg-background sm:items-start">
                {children}
            </main>
        </div>
    );
}