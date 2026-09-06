import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import JsonFormatter from "./json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter — Vui Coding Tools",
  description: "Làm đẹp, kiểm tra và thu gọn JSON ngay trên trình duyệt, không cần đăng nhập.",
};

export default function JsonFormatterPage() {
  return (
    <ToolShell
      kicker="DỮ LIỆU"
      title={<>JSON <em>Formatter</em></>}
      lead={<>Dán JSON vào bên trái, bấm <strong>Làm đẹp</strong> để xem bản thụt lề 2 khoảng trắng — hoặc <strong>Thu gọn</strong> để dồn về một dòng. Mọi thứ chạy ngay trên trình duyệt, không gửi dữ liệu đi đâu cả.</>}
    >
      <JsonFormatter />
    </ToolShell>
  );
}
