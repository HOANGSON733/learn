"use client";
import HeaderLayout from "@/src/components/layout/header/HeaderLayout";
import PublicShell from "@/src/components/layout/PublicShell";
import { Pointer } from "@/src/components/ui/pointer";
import FooterLayout from "@/src/components/layout/footer/FooterLayout";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Pointer /> */}
      <HeaderLayout />
      <PublicShell>{children}</PublicShell>
      <FooterLayout />
    </div>
  );
}