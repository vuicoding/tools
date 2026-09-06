import assert from "node:assert/strict";
import test from "node:test";
import { md5 } from "../app/tools/hash-generator/md5.mjs";

test("md5 matches the RFC 1321 test vectors", () => {
  assert.equal(md5(""), "d41d8cd98f00b204e9800998ecf8427e");
  assert.equal(md5("a"), "0cc175b9c0f1b6a831c399e269772661");
  assert.equal(md5("abc"), "900150983cd24fb0d6963f7d28e17f72");
  assert.equal(md5("message digest"), "f96b697d7cb7938d525a2f31aaf161d0");
  assert.equal(md5("abcdefghijklmnopqrstuvwxyz"), "c3fcd3d76192e4007dfb496cca67e13b");
  assert.equal(md5("12345678901234567890123456789012345678901234567890123456789012345678901234567890"), "57edf4a22be3c955ac49da2e2107b67a");
});

test("md5 hashes UTF-8 bytes and crosses block boundaries", () => {
  // 55/56/64 bytes exercise the three padding branches.
  assert.equal(md5("a".repeat(55)), "ef1772b6dff9a122358552954ad0df65");
  assert.equal(md5("a".repeat(56)), "3b0c8ac703f828b04c6c197006d17218");
  assert.equal(md5("a".repeat(64)), "014842d480b571495a4a0363793f7367");
  assert.equal(md5("Vui Coding"), md5("Vui Coding"));
  assert.equal(md5("tiếng Việt").length, 32);
});
