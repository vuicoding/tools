import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import Base64Converter from "./base64-converter";

export const metadata: Metadata = {
  title: "Base64 Converter — Vui Coding Tools",
  description: "Mã hoá và giải mã Base64 (hỗ trợ UTF-8 và Base64 URL-safe) ngay trên trình duyệt.",
};

export default function Base64ConverterPage() {
  return (
    <ToolShell
      kicker="CHUYỂN ĐỔI"
      title={<>Base64 <em>Converter</em></>}
      lead={<>Mã hoá văn bản thành Base64 hoặc giải mã ngược lại. Hỗ trợ đầy đủ tiếng Việt (UTF-8) và tự nhận dạng cả Base64 <strong>URL-safe</strong> khi giải mã.</>}
    >
      <Base64Converter />
    </ToolShell>
  );
}
