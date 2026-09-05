# Vui Coding Tools

Bộ công cụ online nhỏ gọn dành cho lập trình viên Việt Nam, được xây dựng với Next.js, React và TypeScript, sẵn sàng triển khai trên Vercel.

## Bắt đầu

Yêu cầu Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem trang.

## Các lệnh chính

- `npm run dev`: chạy môi trường phát triển
- `npm run build`: tạo bản build production trong `.next/`
- `npm test`: build và kiểm tra output Next.js
- `npm run lint`: kiểm tra quy chuẩn mã nguồn

Mã giao diện chính nằm trong thư mục `app/`. Trên Vercel, chọn Framework Preset là `Next.js`, để Output Directory mặc định và dùng repository root làm Root Directory.
