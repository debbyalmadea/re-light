export const stringRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(?<!\/(\S)*)((["]([^"]*)["])|([']([^']*)['])|([`]([^`]*)[`]))(?!<\/[^>]*>)/g
export const paramsRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(\w+)(?==)(?!<\/[^>]*>)/g
export const operationRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)([\+\/\-\*\%\!\=\,\.\:\;\@\\\?\|]|&lt;|&gt;|&&)(?!(<\/[^>]*>))/g
export const wordRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(\w+)(?!<\/[^>]*>)/g
export const paranthesesRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)[\(\)\[\]\{\}](?!<\/[^>]*>)/g
export const numberRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(?<!\w+)\d+(?!\w+)(?!<\/[^>]*>)/g
export const decoratorRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)@(\w+)(?!<\/[^>]*>)/g
export const regexRegex =/(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)\/(\S)*\/[gimuy]*(?!<\/[^>]*>)/g
export const importRegex = /(((?<=import.*)(\w+))|((?<=import\s*\([\s\w\,]*)(\w+)(?=\s*[^\(]*\))))/g
const functionNameRegex = /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(\w+)(?=\((.*))(?!<\/[^>]*>)/g

export const pythonPattern = {
    className: /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(((?<=class)\s*(\w+)(?=\s*\(?.*\)?:))|((?<!self\.)(?<=\.)(\w+)(?=\.)))(?!<\/[^>]*>)/g,
    comment: /#(.*)/g,
    functionName: functionNameRegex,
    special: /(?!)^/
}

export const javaPattern = {
    className: /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(\b[A-Z][a-zA-Z]*\b)|((?<=\.)(\w+)(?=\.))(?!<\/[^>]*>)/g,
    comment: /(\/\/(.*))|(\/\*([\s\S]*?)\*\/)/g,
    functionName: functionNameRegex,
    special: /(?!)^/
}

export const jsxPattern = {
    className: /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(((?<=(&lt;)\/?.*)(\b[A-Z][a-zA-Z]*\b))|((?<!&gt;)(\w+)(?=&lt;[^\/])(?!.*\())|((?<=(type|as)\s+)(\w+))|((?<=new\s+)(\w+))|((?<!case|default\:\s+)(?<=\w+\:\s+)(\w+)))(?!<\/[^>]*>)/g,
    comment: /(\/\/(.*))|(\/\*([\s\S]*?)\*\/)/g,
    functionName: /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(((\w+)(?=(&lt;.*&gt;)?\((.*)))|((?<=function\s+)(\w+))|((?<=const\s+)(\w+)(?=\s+\=\s+\()))(?!<\/[^>]*>)/g,
    special: /(?<![<][^>]*?)(?<!<span[^>]*?>[^<]*?)(?<=&lt;\/?)(\w+)(?!<\/[^>]*>)/g
}