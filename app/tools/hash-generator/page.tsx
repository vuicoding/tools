import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import HashGenerator from "./hash-generator";

export const metadata: Metadata = {
  title: "Hash Generator — Vui Coding Tools",
  description: "Tạo mã băm MD5, SHA-1, SHA-256 và SHA-512 ngay trên trình duyệt, không gửi dữ liệu đi đâu.",
};

export default function HashGeneratorPage() {
  return (
    <ToolShell
      kicker="BẢO MẬT"
      title={<>Hash <em>Generator</em></>}
      lead={<>Nhập nội dung rồi chọn thuật toán: <strong>MD5</strong>, <strong>SHA-1</strong>, <strong>SHA-256</strong> hoặc <strong>SHA-512</strong>. Mọi phép băm chạy ngay trong trình duyệt — nội dung của bạn không rời khỏi máy.</>}
    >
      <HashGenerator />
    </ToolShell>
  );
}
