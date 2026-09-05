import type { Metadata } from "next";
import { headers } from "next/headers";
import { Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ variable: "--font-sans", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700", "800"] });
const ibmPlexMono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Vui Coding Tools — Công cụ nhỏ, niềm vui lớn";
  const description = "Bộ công cụ online miễn phí dành cho lập trình viên Việt Nam.";

  return {
    title,
    description,
    openGraph: { title, description, type: "website", locale: "vi_VN", url: origin, images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Vui Coding Tools" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${beVietnamPro.variable} ${ibmPlexMono.variable}`}>{children}</body></html>;
}
