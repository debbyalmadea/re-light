import { useEffect, useState } from "react";
import SyntaxHighlight from "./SyntaxHighlight";

const pythonRegex = /(?:def|class|for|if)\s+\w+\s*\(?.*\)?\:\s*/;
const jsxRegex = /(?:const|function|var|let)\s+\w+/;
const javaRegex = /(?:public|private|protected)\s+(?:class|interface)\s+\w+/;

type LANG = "python" | "java" | "jsx/tsx";

const CodeContainer = ({ code }: { code: string }) => {
  const [language, setLanguage] = useState<LANG | "auto">("auto");
  const [detectedLanguage, setDetectedLanguage] = useState<LANG>("python");

  useEffect(() => {
    const detectLanguage = () => {
      if (pythonRegex.test(code)) {
        return "python";
      } else if (jsxRegex.test(code)) {
        return "jsx/tsx";
      } else if (javaRegex.test(code)) {
        return "java";
      }
      return "python";
    };
    if (language == "auto") {
      setDetectedLanguage(detectLanguage());
    }
  }, [language, code]);

  return (
    <div className="bg-slate-900 h-full px-6 py-6 rounded-xl w-full">
      <div className="flex flex-row font-mono items-center justify-between">
        <div className="flex flex-row space-x-3">
          <div className="bg-red-500 w-3 h-3 rounded-full" />
          <div className="bg-yellow-500 w-3 h-3 rounded-full" />
          <div className="bg-green-500 w-3 h-3 rounded-full" />
        </div>
        <select
          onChange={(e) => {
            setLanguage(e.target.value as LANG);
          }}
          className="text-slate-400 text-sm bg-transparent focus:outline-none"
        >
          <option value={"auto"}>{detectedLanguage} (auto)</option>
          <option value={"python"}>python</option>
          <option value={"java"}>java</option>
          <option value={"jsx/tsx"}>jsx/tsx</option>
        </select>
        <div className="flex flex-row space-x-3">
          <div className="bg-transparent w-3 h-3 rounded-full" />
          <div className="bg-transparent w-3 h-3 rounded-full" />
          <div className="bg-transparent w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="py-4 overflow-scroll font-mono">
        <SyntaxHighlight
          code={code}
          language={language == "auto" ? detectedLanguage : language}
        />
      </div>
    </div>
  );
};

export default CodeContainer;
