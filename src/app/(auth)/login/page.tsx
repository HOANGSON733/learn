// import LoginLayout from "@/layouts/auth/login/LoginLayout";
import LoginLayout from "@/src/layouts/auth/login/LoginLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng Nhập",
  description: "Trang Đăng Nhập Hệ Thống CRM",
};

export default function LoginPage() {
  return (
    <LoginLayout />
  );


}
