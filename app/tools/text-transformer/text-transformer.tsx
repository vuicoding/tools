"use client";

import { useMemo, useState } from "react";
import Workbench from "../workbench";

const sample = "Vui Coding — công cụ nhỏ, niềm vui lớn";

const stripDiacritics = (text: string) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");

const asciiWords = (text: string) => stripDiacritics(text).match(/[A-Za-z0-9]+/g) ?? [];

const transforms: { label: string; run: (text: string) => string }[] = [
  { label: "CHỮ HOA", run: (text) => text.toLocaleUpperCase("vi") },
  { label: "chữ thường", run: (text) => text.toLocaleLowerCase("vi") },
  { label: "Viết Hoa Đầu Từ", run: (text) => text.replace(/\S+/g, (word) => word.charAt(0).toLocaleUpperCase("vi") + word.slice(1).toLocaleLowerCase("vi")) },
  { label: "camelCase", run: (text) => asciiWords(text).map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())).join("") },
  { label: "snake_case", run: (text) => asciiWords(text).map((word) => word.toLowerCase()).join("_") },
  { label: "kebab-case", run: (text) => asciiWords(text).map((word) => word.toLowerCase()).join("-") },
  { label: "Gọn khoảng trắng", run: (text) => text.replace(/\s+/g, " ").trim() },
];

export default function TextTransformer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    return `${input.length} ký tự · ${words} từ · ${input ? input.split(/\r\n|\r|\n/).length : 0} dòng`;
  }, [input]);

  const run = (transform: (text: string) => string) => {
    if (!input.trim()) {
      setOutput("");
      setError("Chưa có văn bản nào để biến đổi.");
      return;
    }
    setOutput(transform(input));
    setError("");
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
      note={stats}
      inputLabel="Văn bản đầu vào"
      placeholder="Dán văn bản của bạn vào đây..."
      actions={
        <>
          {transforms.map((transform, index) => (
            <button
              key={transform.label}
              type="button"
              className={index === 0 ? "primary-button" : undefined}
              onClick={() => run(transform.run)}
            >
              {transform.label}
            </button>
          ))}
          <button type="button" onClick={() => reset(sample)}>Dán ví dụ</button>
          <button type="button" onClick={() => reset("")}>Xoá</button>
        </>
      }
    />
  );
}
