import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start w-full relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* <img
          src="/background.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{
            filter: "blur(5px) brightness(0.6)",
            transform: "scale(1.05)",
          }}
        /> */}
      </div>

      <div className="flex flex-col w-full min-w-0">
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
}
