import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("creates a native Next.js production build", async () => {
  await access(new URL(".next/BUILD_ID", projectRoot));

  const [page, layout, packageJson, formatterPage, formatter] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
    readFile(new URL("app/tools/json-formatter/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/tools/json-formatter/json-formatter.tsx", projectRoot), "utf8"),
  ]);

  assert.match(page, /Vui Coding/);
  assert.match(page, /JSON Formatter/);
  assert.match(page, /\/tools\/json-formatter/);
  assert.match(formatterPage, /JSON Formatter/);
  assert.match(formatter, /JSON\.stringify\(JSON\.parse/);
  assert.match(layout, /lang="vi"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare/i);
});
