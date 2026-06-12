import HeaderLayout from "@/src/components/layout/header/HeaderLayout";
import PublicShell from "@/src/components/layout/PublicShell";
import { Pointer } from "@/src/components/ui/pointer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="cursor-none [&_*]:cursor-none">
      <Pointer />
      <HeaderLayout />
      <PublicShell>{children}</PublicShell>
    </div>
  );
}