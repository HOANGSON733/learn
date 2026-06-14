"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import SideBarLayout from "@/src/components/layout/sidebar/SideBarLayout";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";
import { cn } from "@/src/lib/utils";

const baseMainClassName =
  "flex min-h-0 w-full flex-1 flex-col bg-background overflow-x-hidden transition-[padding,margin] duration-300 ease-in-out";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(!isHome);
  }, [isHome]);

  if (isHome) {
    return <main className={cn(baseMainClassName, "items-stretch p-0")}>{children}</main>;
  }

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div className="flex min-h-svh w-full">
        <div className="**:data-[slot=sidebar-gap]:duration-300 **:data-[slot=sidebar-gap]:ease-in-out **:data-[slot=sidebar-container]:duration-300 **:data-[slot=sidebar-container]:ease-in-out">
          <SideBarLayout />
        </div>
        <SidebarInset className={cn(baseMainClassName, "items-center justify-between py-16 sm:items-start")}>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
