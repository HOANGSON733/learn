"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import SideBarLayout from "@/src/components/layout/sidebar/SideBarLayout";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { cn } from "@/src/lib/utils";

const baseMainClassName =
  "flex flex-1 w-full mx-auto flex-col bg-white overflow-x-hidden transition-[padding,margin] duration-300 ease-in-out dark:bg-background";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(!isHome);
  const mainClassName = cn(
    baseMainClassName,
    isHome
      ? "items-stretch p-0"
      : "items-center justify-between py-16 sm:items-start"
  );

  useEffect(() => {
    setOpen(!isHome);
  }, [isHome]);

  return (
    <SidebarProvider
      open={isHome ? false : open}
      onOpenChange={(value) => {
        if (!isHome) setOpen(value);
      }}
    >
      <div
        className={cn(
          "**:data-[slot=sidebar-gap]:duration-300 **:data-[slot=sidebar-gap]:ease-in-out",
          "**:data-[slot=sidebar-container]:duration-300 **:data-[slot=sidebar-container]:ease-in-out",
          isHome && "pointer-events-none"
        )}
      >
        <SideBarLayout />
      </div>
      <main className={mainClassName}>{children}</main>
    </SidebarProvider>
  );
}
