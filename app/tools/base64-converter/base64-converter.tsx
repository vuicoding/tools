"use client";

import { useState } from "react";
import Workbench from "../workbench";

const sample = "Vui Coding — công cụ nhỏ, niềm vui lớn";

const toBase64 = (text: string) => {
  let binary = "";
  for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
  return btoa(binary);
};

const fromBase64 = (text: string) => {
  const normalized = text.trim().replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  return new TextDecoder().decode(Uint8Array.from(atob(padded), (char) => char.charCodeAt(0)));
};

export default function Base64Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const run = (convert: (text: string) => string, failure: string) => {
    if (!input.trim()) {
      setOutput("");
      setError("Chưa có nội dung nào để chuyển đổi.");
      return;
    }
    try {
      setOutput(convert(input));
      setError("");
    } catch {
      setError(failure);
    }
  };

  const reset = (value: string) => {
    setInput(value);
    setOutput("");
    setError("");
  };

  return (
    <Workbench
      input={input}
      onInput={setInput}
      output={output}
      error={error}
      inputLabel="Nội dung đầu vào"
      placeholder="Văn bản thường hoặc chuỗi Base64..."
      actions={
        <>
          <button type="button" className="primary-button" onClick={() => run(toBase64, "Không mã hoá được nội dung này.")}>Mã hoá <span aria-hidden="true">→</span></button>
          <button type="button" onClick={() => run(fromBase64, "Chuỗi Base64 không hợp lệ.")}>Giải mã</button>
          <button type="button" onClick={() => reset(sample)}>Dán ví dụ</button>
          <button type="button" onClick={() => reset("")}>Xoá</button>
        </>
      }
    />
  );
}
