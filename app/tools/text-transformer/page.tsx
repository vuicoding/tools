import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import TextTransformer from "./text-transformer";

export const metadata: Metadata = {
  title: "Text Transformer — Vui Coding Tools",
  description: "Đổi kiểu chữ, chuẩn hoá khoảng trắng và tạo camelCase, snake_case, kebab-case ngay trên trình duyệt.",
};

export default function TextTransformerPage() {
  return (
    <ToolShell
      kicker="VĂN BẢN"
      title={<>Text <em>Transformer</em></>}
      lead={<>Dán văn bản vào bên trái rồi chọn kiểu biến đổi: viết hoa, viết thường, <strong>Viết Hoa Đầu Từ</strong>, camelCase, snake_case, kebab-case hay gọn khoảng trắng. Dấu tiếng Việt được bỏ tự động cho các kiểu dành cho code.</>}
    >
      <TextTransformer />
    </ToolShell>
  );
}
