import type { Metadata } from "next";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "ColdRiver Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="prose prose-lg font-sans max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200 transform transition-all duration-300 hover:shadow-3xl">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
