import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start w-full relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>

      <div className="flex flex-col w-full min-w-0">
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
}
