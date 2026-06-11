import HeaderLayout from "@/src/components/layout/header/HeaderLayout";
import SideBarLayout from "@/src/components/layout/sidebar/SideBarLayout";
import { SidebarProvider } from "@/src/components/ui/sidebar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HeaderLayout />
            <SidebarProvider>
                <SideBarLayout />
                <main className="flex flex-1 w-full max-w-8xl mx-auto flex-col items-center justify-between py-20 px-16 bg-white dark:bg-background sm:items-start">
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
}