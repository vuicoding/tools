import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import UrlToolkit from "./url-toolkit";

export const metadata: Metadata = {
  title: "URL Toolkit — Vui Coding Tools",
  description: "Phân tích URL thành từng thành phần, xem tham số query và mã hoá / giải mã URL ngay trên trình duyệt.",
};

export default function UrlToolkitPage() {
  return (
    <ToolShell
      kicker="WEB"
      title={<>URL <em>Toolkit</em></>}
      lead={<>Dán URL để tách <strong>protocol, host, port, path, hash</strong> và bảng tham số query — hoặc dùng <strong>Mã hoá</strong> / <strong>Giải mã</strong> cho phần chuỗi cần nhúng vào URL.</>}
    >
      <UrlToolkit />
    </ToolShell>
  );
}
