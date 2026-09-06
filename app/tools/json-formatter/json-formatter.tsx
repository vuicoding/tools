"use client";

import { useState } from "react";
import Workbench from "../workbench";

const sample = '{"project":"Vui Coding","tags":["json","tools"],"stars":9,"open":true,"meta":{"year":2026}}';

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const run = (indent: number) => {
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
      inputLabel="JSON đầu vào"
      placeholder='{"hello":"world"}'
      actions={
        <>
          <button type="button" className="primary-button" onClick={() => run(2)}>Làm đẹp <span aria-hidden="true">✦</span></button>
          <button type="button" onClick={() => run(0)}>Thu gọn</button>
          <button type="button" onClick={() => reset(sample)}>Dán ví dụ</button>
          <button type="button" onClick={() => reset("")}>Xoá</button>
        </>
      }
    />
  );
}
