import Link from "next/link";
import type { ReactNode } from "react";

export default function ToolShell({ kicker, title, lead, children }: { kicker: string; title: ReactNode; lead: ReactNode; children: ReactNode }) {
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
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children}
      </section>

      <footer>
        <Link className="brand footer-brand" href="/"><span className="brand-mark">V.</span><span>Vui Coding <strong>Tools</strong></span></Link>
        <p>Made with <span aria-hidden="true">♥</span> and too much coffee in Vietnam.</p>
        <span>© 2026 Vui Coding</span>
      </footer>
    </main>
  );
}
