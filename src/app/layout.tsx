import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ZIO-AI Dashboard",
  description: "AI assistant dashboard built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  );
}
