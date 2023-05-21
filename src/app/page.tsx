"use client";
import { useEffect, useRef, useState } from "react";
import CodeContainer from "./CodeContainer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMinus } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Home() {
  const [code, setCode] = useState("");
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
    <main className="flex min-h-screen flex-col items-center space-y-24 p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="relative text-8xl">
          <span className="italic">re</span>.light
        </h1>
      </div>
      <div className="flex flex-row justify-center items-start w-full space-x-4">
        {textareaVisibility ? (
          <div className="p-6 bg-transparent rounded-xl border-slate-900 border-2 flex flex-col items-end justify-end w-1/2">
            <button
              onClick={(e) => setTextareaVisibility(false)}
              className="hover:bg-slate-800 w-6 h-6 flex justify-center items-center hover:rounded-sm"
            >
              <FontAwesomeIcon icon={faMinus} className="text-slate-600" />
            </button>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="focus:outline-none font-mono bg-transparent h-full w-full py-4"
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
