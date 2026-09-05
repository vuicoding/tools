"use client";

import { useMemo, useState } from "react";

const tools = [
  { icon: "{ }", title: "JSON Formatter", description: "Làm đẹp, kiểm tra và thu gọn JSON chỉ trong một nhịp.", category: "Dữ liệu", tone: "lime", ready: true },
  { icon: "Aa", title: "Text Transformer", description: "Đổi kiểu chữ, loại khoảng trắng và chuẩn hoá văn bản.", category: "Văn bản", tone: "coral", ready: true },
  { icon: "#", title: "Hash Generator", description: "Tạo nhanh MD5, SHA-1 và SHA-256 ngay trên trình duyệt.", category: "Bảo mật", tone: "violet", ready: false },
  { icon: "↔", title: "Base64 Converter", description: "Mã hoá và giải mã Base64 mà không cần rời khỏi trang.", category: "Chuyển đổi", tone: "blue", ready: false },
  { icon: "//", title: "Regex Playground", description: "Thử biểu thức chính quy với kết quả được tô sáng tức thì.", category: "Lập trình", tone: "yellow", ready: false },
  { icon: "⌁", title: "URL Toolkit", description: "Phân tích, mã hoá và dựng lại URL thật dễ dàng.", category: "Web", tone: "pink", ready: false },
];

const categories = ["Tất cả", "Dữ liệu", "Văn bản", "Bảo mật", "Chuyển đổi", "Lập trình", "Web"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("vi");
    return tools.filter((tool) => {
      const matchesCategory = category === "Tất cả" || tool.category === category;
      const matchesQuery = !normalizedQuery || `${tool.title} ${tool.description} ${tool.category}`.toLocaleLowerCase("vi").includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vui Coding Tools - Trang chủ">
          <span className="brand-mark" aria-hidden="true">V.</span>
          <span>Vui Coding <strong>Tools</strong></span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#tools">Công cụ</a>
          <a href="#about">Về chúng mình</a>
        </nav>
        <a className="header-cta" href="#tools">Khám phá ngay <span aria-hidden="true">↘</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>✦</span> Tạo bởi dev, dành cho dev</div>
          <h1>Công cụ nhỏ.<br /><em>Niềm vui lớn.</em></h1>
          <p>Bộ công cụ online miễn phí giúp công việc lập trình mỗi ngày nhanh hơn, nhẹ hơn và vui hơn một chút.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#tools">Xem tất cả công cụ <span aria-hidden="true">→</span></a>
            <span className="trust-note"><span aria-hidden="true">●</span> Không đăng nhập · Không lưu dữ liệu</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Minh hoạ trình định dạng JSON">
          <div className="spark spark-one" aria-hidden="true">✦</div>
          <div className="spark spark-two" aria-hidden="true">✦</div>
          <div className="code-card">
            <div className="code-topbar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>hello.json</span>
              <span className="format-pill">Đã làm đẹp ✓</span>
            </div>
            <pre aria-hidden="true"><code><span className="line-number">1</span> <span className="punctuation">&#123;</span>{"\n"}<span className="line-number">2</span>   <span className="key">&quot;project&quot;</span><span className="punctuation">:</span> <span className="value">&quot;Vui Coding&quot;</span><span className="punctuation">,</span>{"\n"}<span className="line-number">3</span>   <span className="key">&quot;status&quot;</span><span className="punctuation">:</span> <span className="value">&quot;awesome&quot;</span><span className="punctuation">,</span>{"\n"}<span className="line-number">4</span>   <span className="key">&quot;coffee&quot;</span><span className="punctuation">:</span> <span className="number">true</span>{"\n"}<span className="line-number">5</span> <span className="punctuation">&#125;</span></code></pre>
            <div className="code-footer">
              <span>JSON hợp lệ</span>
              <button type="button" aria-label="Sao chép đoạn JSON">Sao chép <span aria-hidden="true">⧉</span></button>
            </div>
          </div>
          <div className="floating-tag tag-fast" aria-hidden="true"><b>⚡</b> Nhanh</div>
          <div className="floating-tag tag-free" aria-hidden="true"><b>♡</b> Miễn phí</div>
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-heading">
          <div>
            <span className="section-kicker">BỘ ĐỒ NGHỀ CỦA BẠN</span>
            <h2>Mọi thứ bạn cần,<br /><em>ngay trong một chỗ.</em></h2>
          </div>
          <p>Từ định dạng dữ liệu đến biến đổi văn bản — những tiện ích nhỏ để bạn tập trung vào việc lớn.</p>
        </div>

        <div className="tool-controls">
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Tìm công cụ</span>
            <input type="search" placeholder="Tìm công cụ..." value={query} onChange={(event) => setQuery(event.target.value)} />
            <kbd>⌘ K</kbd>
          </label>
          <div className="filters" aria-label="Lọc theo danh mục">
            {categories.map((item) => (
              <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="tool-grid" aria-live="polite">
          {filteredTools.map((tool, index) => (
            <article className={`tool-card ${tool.tone}`} key={tool.title} style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}>
              <div className="card-meta">
                <span className="tool-icon" aria-hidden="true">{tool.icon}</span>
                <span className={tool.ready ? "status ready" : "status"}>{tool.ready ? "Sẵn sàng" : "Sắp ra mắt"}</span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <div className="card-footer">
                <span>{tool.category}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        {filteredTools.length === 0 && (
          <div className="empty-state">
            <span aria-hidden="true">¯\_(ツ)_/¯</span>
            <p>Chưa tìm thấy công cụ phù hợp. Thử một từ khoá khác nhé!</p>
          </div>
        )}
      </section>

      <section className="promise" id="about">
        <span className="promise-doodle" aria-hidden="true">✦</span>
        <p>KHÔNG QUẢNG CÁO · KHÔNG THEO DÕI · KHÔNG PHỨC TẠP</p>
        <h2>Làm tốt một việc,<br /><em>và làm thật vui.</em></h2>
        <a href="#top">Quay lại đầu trang <span aria-hidden="true">↑</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">V.</span><span>Vui Coding <strong>Tools</strong></span></a>
        <p>Made with <span aria-hidden="true">♥</span> and too much coffee in Vietnam.</p>
        <span>© 2026 Vui Coding</span>
      </footer>
    </main>
  );
}
