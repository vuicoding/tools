"use client";

import { useMemo, useState } from "react";
import Workbench from "../workbench";

const samplePattern = "(\w+)@(\w+\.\w+)";
const sampleText = "Liên hệ: hello@vuicoding.dev hoặc support@vuicoding.dev nhé!";

export default function RegexPlayground() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const result = useMemo(() => {
    if (!pattern) return { matches: [] as RegExpExecArray[], error: "" };
    try {
      const regex = new RegExp(pattern, flags.includes("g") ? flags : `${flags}g`);
      return { matches: [...text.matchAll(regex)] as RegExpExecArray[], error: "" };
    } catch (err) {
      return { matches: [] as RegExpExecArray[], error: err instanceof Error ? err.message : "Biểu thức không hợp lệ." };
    }
  }, [pattern, flags, text]);

  const { matches, error } = result;

  const highlighted = useMemo(() => {
    if (error || !matches.length) return null;
    const nodes: React.ReactNode[] = [];
    let cursor = 0;
    matches.forEach((match, index) => {
      const start = match.index ?? 0;
      if (start > cursor) nodes.push(text.slice(cursor, start));
      if (match[0]) nodes.push(<mark key={index}>{match[0]}</mark>);
      cursor = start + match[0].length;
    });
    nodes.push(text.slice(cursor));
    return nodes;
  }, [matches, error, text]);

  const summary = matches
    .map((match, index) => {
      const groups = match.slice(1).map((group, groupIndex) => `$${groupIndex + 1}=${group ?? ""}`).join(" ");
      return `#${index + 1} [${match.index}] ${match[0]}${groups ? ` · ${groups}` : ""}`;
    })
    .join("\n");

  const reset = (nextPattern: string, nextText: string) => {
    setPattern(nextPattern);
    setText(nextText);
    setFlags("g");
  };

  return (
    <Workbench
      input={text}
      onInput={setText}
      output={summary}
      error={error}
      note={pattern && !error ? `${matches.length} kết quả khớp` : "Nhập biểu thức để bắt đầu — kết quả tô sáng ngay khi bạn gõ."}
      inputLabel="Văn bản thử"
      outputLabel="Kết quả tô sáng"
      placeholder="Dán văn bản cần dò tìm..."
      emptyText="Chưa có kết quả khớp nào."
      outputNode={highlighted}
      fields={
        <>
          <label className="field">
            <span>Biểu thức</span>
            <input value={pattern} onChange={(event) => setPattern(event.target.value)} placeholder="\d+" spellCheck={false} />
          </label>
          <label className="field">
            <span>Cờ (flags)</span>
            <input value={flags} onChange={(event) => setFlags(event.target.value)} placeholder="gi" spellCheck={false} />
          </label>
        </>
      }
      actions={
        <>
          <button type="button" className="primary-button" onClick={() => reset(samplePattern, sampleText)}>Dán ví dụ <span aria-hidden="true">✦</span></button>
          <button type="button" onClick={() => reset("", "")}>Xoá</button>
        </>
      }
    />
  );
}
