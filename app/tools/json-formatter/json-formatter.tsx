"use client";

import { useState } from "react";

const sample = '{"project":"Vui Coding","tags":["json","tools"],"stars":9,"open":true,"meta":{"year":2026}}';

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const run = (indent: number) => {
    setCopied(false);
    if (!input.trim()) {
      setOutput("");
      setError("Chưa có JSON nào để xử lý.");
      return;
    }
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, indent));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "JSON không hợp lệ.");
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <div className="formatter">
      <div className="formatter-actions">
        <button type="button" className="primary-button" onClick={() => run(2)}>Làm đẹp <span aria-hidden="true">✦</span></button>
        <button type="button" onClick={() => run(0)}>Thu gọn</button>
        <button type="button" onClick={() => { setInput(sample); setOutput(""); setError(""); setCopied(false); }}>Dán ví dụ</button>
        <button type="button" onClick={() => { setInput(""); setOutput(""); setError(""); setCopied(false); }}>Xoá</button>
      </div>

      {error && <p className="formatter-error" role="alert">{error}</p>}

      <div className="formatter-grid">
        <label className="formatter-panel">
          <span>JSON đầu vào</span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='{"hello":"world"}'
            spellCheck={false}
          />
        </label>

        <div className="formatter-panel">
          <span>
            Kết quả
            <button type="button" className="copy-button" onClick={copy} disabled={!output}>{copied ? "Đã chép ✓" : "Sao chép ⧉"}</button>
          </span>
          <pre aria-live="polite">{output || "Kết quả sẽ hiện ở đây."}</pre>
        </div>
      </div>
    </div>
  );
}
