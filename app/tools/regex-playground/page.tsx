import type { Metadata } from "next";
import ToolShell from "../tool-shell";
import RegexPlayground from "./regex-playground";

export const metadata: Metadata = {
  title: "Regex Playground — Vui Coding Tools",
  description: "Thử biểu thức chính quy với kết quả được tô sáng tức thì ngay trên trình duyệt.",
};

export default function RegexPlaygroundPage() {
  return (
    <ToolShell
      kicker="LẬP TRÌNH"
      title={<>Regex <em>Playground</em></>}
      lead={<>Gõ biểu thức và cờ, mọi kết quả khớp trong văn bản được <strong>tô sáng ngay lập tức</strong>. Cờ <code>g</code> luôn được thêm sẵn; danh sách vị trí và nhóm bắt nằm ở nút Sao chép.</>}
    >
      <RegexPlayground />
    </ToolShell>
  );
}
