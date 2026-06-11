import HeaderLayout from "@/src/components/layout/header/HeaderLayout";
import SideBarLayout from "@/src/components/layout/sidebar/SideBarLayout";
import { Pointer } from "@/src/components/ui/pointer";
import { SidebarProvider } from "@/src/components/ui/sidebar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="cursor-none [&_*]:cursor-none">
      <Pointer />
      <HeaderLayout />
      <SidebarProvider>
        <SideBarLayout />
        <main className="flex flex-1 w-full max-w-8xl mx-auto flex-col items-center justify-between bg-white px-16 py-20 dark:bg-background sm:items-start">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}