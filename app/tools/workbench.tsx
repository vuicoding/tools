"use client";

import { useState, type ReactNode } from "react";

type WorkbenchProps = {
  actions: ReactNode;
  input: string;
  onInput: (value: string) => void;
  output: string;
  fields?: ReactNode;
  error?: string;
  note?: ReactNode;
  inputLabel?: string;
  outputLabel?: string;
  placeholder?: string;
  emptyText?: string;
  outputNode?: ReactNode;
};

export default function Workbench({
  actions,
  input,
  onInput,
  output,
  fields,
  error,
  note,
  inputLabel = "Đầu vào",
  outputLabel = "Kết quả",
  placeholder,
  emptyText = "Kết quả sẽ hiện ở đây.",
  outputNode,
}: WorkbenchProps) {
  const [copiedFor, setCopiedFor] = useState("");
  const copied = output !== "" && copiedFor === output;

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopiedFor(output);
  };

  return (
    <div className="formatter">
      {fields && <div className="formatter-fields">{fields}</div>}
      <div className="formatter-actions">{actions}</div>

      {error && <p className="formatter-error" role="alert">{error}</p>}
      {note && <p className="formatter-note">{note}</p>}

      <div className="formatter-grid">
        <label className="formatter-panel">
          <span>{inputLabel}</span>
          <textarea value={input} onChange={(event) => onInput(event.target.value)} placeholder={placeholder} spellCheck={false} />
        </label>

        <div className="formatter-panel">
          <span>
            {outputLabel}
            <button type="button" className="copy-button" onClick={copy} disabled={!output}>{copied ? "Đã chép ✓" : "Sao chép ⧉"}</button>
          </span>
          <pre aria-live="polite">{outputNode ?? (output || emptyText)}</pre>
        </div>
      </div>
    </div>
  );
}
