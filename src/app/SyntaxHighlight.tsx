import { javaKeywords, jsxKeywords, pythonKeywords } from "./lib/keywords";
import {
  decoratorRegex,
  importRegex,
  javaPattern,
  jsxPattern,
  numberRegex,
  operationRegex,
  paramsRegex,
  parenthesesRegex,
  pythonPattern,
  regexRegex,
  stringRegex,
  wordRegex,
} from "./lib/pattern";

type LANG = "python" | "java" | "jsx/tsx";
const setting = {
  python: {
    keywords: pythonKeywords,
    patterns: pythonPattern,
  },
  java: {
    keywords: javaKeywords,
    patterns: javaPattern,
  },
  "jsx/tsx": {
    keywords: jsxKeywords,
    patterns: jsxPattern,
  },
};
const SyntaxHighlight = ({
  code,
  language,
}: {
  code: string;
  language: LANG;
}) => {
  const escapeHTML = (str: string) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  let keywords = setting[language].keywords;
  let patterns = setting[language].patterns;

  const highlightCode = (code: string) => {
    let imports: Array<String> | null;
    if (language != "jsx/tsx") {
      imports = escapeHTML(code).match(importRegex);
    }
    // console.log(imports);
    const highlightedCode = escapeHTML(code)
      .replace(
        patterns.comment,
        (match) => `<span class="text-gray-500">${match}</span>`
      )
      .replace(
        stringRegex,
        (match) => `<span class="text-emerald-400">${match}</span>`
      )
      .replace(
        regexRegex,
        (match) => `<span class="text-sky-300">${match}</span>`
      )
      .replace(
        paramsRegex,
        (match) => `<span class="text-purple-400 italic">${match}</span>`
      )
      .replace(
        decoratorRegex,
        (match, token) => `@<span class="text-pink-400">${token}</span>`
      )
      .replace(
        patterns.className,
        (match) => `<span class="text-yellow-400">${match}</span>`
      )
      .replace(
        patterns.functionName,
        (match) => `<span class="text-indigo-400">${match}</span>`
      )
      .replace(wordRegex, (match, token) =>
        keywords.basic.includes(token)
          ? `<span class="text-sky-300 italic">${token}</span>`
          : keywords.important.includes(token)
          ? `<span class="text-pink-500 italic">${token}</span>`
          : keywords.types.includes(token)
          ? `<span class="text-yellow-400 italic">${token}</span>`
          : keywords.specials.includes(token)
          ? `<span class="text-red-400 italic">self</span>`
          : imports?.includes(token)
          ? `<span class="text-yellow-400">${token}</span>`
          : match
      )
      .replace(
        patterns.special,
        (match) => `<span class="text-red-400">${match}</span>`
      )
      .replace(
        operationRegex,
        (match) => `<span class="text-sky-300">${match}</span>`
      )
      .replace(
        parenthesesRegex,
        (match) => `<span class="text-pink-400">${match}</span>`
      )
      .replace(
        numberRegex,
        (match) => `<span class="text-orange-400">${match}</span>`
      );
    return { __html: highlightedCode };
  };

  return <pre dangerouslySetInnerHTML={highlightCode(code)} />;
};

export default SyntaxHighlight;
