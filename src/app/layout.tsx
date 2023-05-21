import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syntax Highlighting - Python",
  description: `A Next.js-based syntax highlighter website with support for Python, Java, 
  and JSX/TSX languages. Built using regular expressions, it automatically detects the 
  language and highlights keywords, strings, comments, and more. 
  Easily visualize and share code snippets with beautifully highlighted syntax.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
