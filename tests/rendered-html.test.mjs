import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

const toolRoutes = [
  "json-formatter",
  "text-transformer",
  "hash-generator",
  "base64-converter",
  "regex-playground",
  "url-toolkit",
];

test("creates a native Next.js production build", async () => {
  await access(new URL(".next/BUILD_ID", projectRoot));

  const [page, layout, packageJson, formatter] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
    readFile(new URL("app/tools/json-formatter/json-formatter.tsx", projectRoot), "utf8"),
  ]);

  assert.match(page, /Vui Coding/);
  assert.match(page, /JSON Formatter/);
  assert.match(layout, /lang="vi"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare/i);
  assert.match(formatter, /JSON\.stringify\(JSON\.parse/);
});

test("every tool card links to a real tool page", async () => {
  const page = await readFile(new URL("app/page.tsx", projectRoot), "utf8");

  for (const route of toolRoutes) {
    await access(new URL(`app/tools/${route}/page.tsx`, projectRoot));
    assert.ok(page.includes(`/tools/${route}`), `trang chủ thiếu liên kết tới /tools/${route}`);
  }

  assert.doesNotMatch(page, /ready: false/);
});
