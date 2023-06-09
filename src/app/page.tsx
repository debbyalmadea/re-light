"use client";
import { useEffect, useRef, useState } from "react";
import CodeContainer from "./CodeContainer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMinus } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const defaultCode = `
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syntax Highlighting - Python",
  description: '
    A Next.js-based syntax highlighter website with support for Python, Java, 
    and JSX/TSX languages. Built using regular expressions, it automatically detects the 
    language and highlights keywords, strings, comments, and more. 
    Easily visualize and share code snippets with beautifully highlighted syntax.
  '
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
`;
export default function Home() {
  const [code, setCode] = useState(defaultCode);
  const [textareaVisibility, setTextareaVisibility] = useState(true);
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current != null) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [code, textareaVisibility]);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-16 p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px]">
        <h1 className="relative text-8xl">
          <span className="italic">re</span>.light
        </h1>
      </div>
      <div className="flex flex-row justify-center items-start w-full space-x-4">
        {textareaVisibility ? (
          <div className="p-6 bg-slate-900 rounded-xl border-slate-900 border-2 flex flex-col items-start justify-start w-1/2">
            <button
              onClick={(e) => setTextareaVisibility(false)}
              className="hover:bg-slate-800 w-10 h-10 flex justify-center items-center hover:rounded-lg"
            >
              <FontAwesomeIcon icon={faMinus} className="text-slate-600" />
            </button>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="focus:outline-none font-mono bg-transparent h-full w-full pb-0 pt-4"
              rows={10}
              autoFocus={true}
            />
          </div>
        ) : (
          <button
            onClick={(e) => {
              setTextareaVisibility(true);
            }}
          >
            <FontAwesomeIcon
              icon={faCode}
              className="text-slate-400 py-6 px-6 hover:bg-slate-900 hover:rounded-lg"
            />
          </button>
        )}
        <div className={`${textareaVisibility ? "w-1/2" : "min-w-[50%]"}`}>
          <CodeContainer code={code} />
        </div>
      </div>
    </main>
  );
}
