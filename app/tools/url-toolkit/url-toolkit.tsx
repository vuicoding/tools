"use client";

import { useState } from "react";
import Workbench from "../workbench";

const sample = "https://vuicoding.dev/tools?q=json formatter&lang=vi#ket-qua";

const describe = (raw: string) => {
  const url = new URL(raw.trim());
  const params = [...url.searchParams];
  const lines = [
    `protocol : ${url.protocol}`,
    `host     : ${url.host}`,
    `hostname : ${url.hostname}`,
    `port     : ${url.port || "(mặc định)"}`,
    `path     : ${url.pathname}`,
    `hash     : ${url.hash || "(không có)"}`,
    "",
    params.length ? `query (${params.length} tham số):` : "query    : (không có)",
    ...params.map(([key, value]) => `  ${key} = ${value}`),
  ];
  return lines.join("\n");
};

export default function UrlToolkit() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const run = (convert: (value: string) => string, failure: string) => {
    if (!input.trim()) {
      setOutput("");
      setError("Chưa có URL nào để xử lý.");
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
      inputLabel="URL đầu vào"
      outputLabel="Kết quả phân tích"
      placeholder="https://vuicoding.dev/tools?q=json"
      actions={
        <>
          <button type="button" className="primary-button" onClick={() => run(describe, "URL không hợp lệ — nhớ kèm http:// hoặc https://")}>Phân tích <span aria-hidden="true">→</span></button>
          <button type="button" onClick={() => run((value) => encodeURIComponent(value.trim()), "Không mã hoá được chuỗi này.")}>Mã hoá</button>
          <button type="button" onClick={() => run((value) => decodeURIComponent(value.trim()), "Chuỗi đã mã hoá không hợp lệ.")}>Giải mã</button>
          <button type="button" onClick={() => reset(sample)}>Dán ví dụ</button>
          <button type="button" onClick={() => reset("")}>Xoá</button>
        </>
      }
    />
  );
}
