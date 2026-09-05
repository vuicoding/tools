import type { Metadata } from "next";
import Link from "next/link";
import JsonFormatter from "./json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter — Vui Coding Tools",
  description: "Làm đẹp, kiểm tra và thu gọn JSON ngay trên trình duyệt, không cần đăng nhập.",
};

export default function JsonFormatterPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vui Coding Tools - Trang chủ">
          <span className="brand-mark" aria-hidden="true">V.</span>
          <span>Vui Coding <strong>Tools</strong></span>
        </Link>
        <Link className="header-cta" href="/#tools"><span aria-hidden="true">←</span> Tất cả công cụ</Link>
      </header>

      <section className="tool-page">
        <span className="section-kicker">DỮ LIỆU</span>
        <h1>JSON <em>Formatter</em></h1>
        <p>Dán JSON vào bên trái, bấm <strong>Làm đẹp</strong> để xem bản thụt lề 2 khoảng trắng — hoặc <strong>Thu gọn</strong> để dồn về một dòng. Mọi thứ chạy ngay trên trình duyệt, không gửi dữ liệu đi đâu cả.</p>
        <JsonFormatter />
      </section>

      <footer>
        <Link className="brand footer-brand" href="/"><span className="brand-mark">V.</span><span>Vui Coding <strong>Tools</strong></span></Link>
        <p>Made with <span aria-hidden="true">♥</span> and too much coffee in Vietnam.</p>
        <span>© 2026 Vui Coding</span>
      </footer>
    </main>
  );
}
