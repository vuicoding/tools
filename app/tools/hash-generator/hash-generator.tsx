"use client";

import { useState } from "react";
import Workbench from "../workbench";
import { md5 } from "./md5.mjs";

const sample = "Vui Coding — công cụ nhỏ, niềm vui lớn";

const algorithms = ["MD5", "SHA-1", "SHA-256", "SHA-512"] as const;

const toHex = (buffer: ArrayBuffer) => [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const run = async (algorithm: (typeof algorithms)[number]) => {
    try {
      const digest = algorithm === "MD5" ? md5(input) : toHex(await crypto.subtle.digest(algorithm, new TextEncoder().encode(input)));
      setOutput(digest);
      setNote(`${algorithm} · ${digest.length * 4} bit`);
      setError("");
    } catch {
      setError(`Trình duyệt không tạo được ${algorithm}. Hãy thử lại trên kết nối https hoặc localhost.`);
    }
  };

  const reset = (value: string) => {
    setInput(value);
    setOutput("");
    setNote("");
    setError("");
  };

  return (
    <Workbench
      input={input}
      onInput={setInput}
      output={output}
      error={error}
      note={note}
      inputLabel="Nội dung cần băm"
      outputLabel="Mã băm (hex)"
      placeholder="Nhập chuỗi cần tạo mã băm..."
      actions={
        <>
          {algorithms.map((algorithm, index) => (
            <button key={algorithm} type="button" className={index === 0 ? "primary-button" : undefined} onClick={() => run(algorithm)}>
              {algorithm}
            </button>
          ))}
          <button type="button" onClick={() => reset(sample)}>Dán ví dụ</button>
          <button type="button" onClick={() => reset("")}>Xoá</button>
        </>
      }
    />
  );
}
