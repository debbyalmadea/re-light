interface IKeywords {
  basic: Array<String>;
  important : Array<String>;
  types: Array<String>;
  specials: Array<String>;
}

export const pythonKeywords: IKeywords = {
    basic: [
        "and",
        "as",
        "assert",
        "break",
        "continue",
        "del",
        "elif",
        "else",
        "except",
        "False",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "None",
        "nonlocal",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "True",
        "try",
        "while",
        "with",
        "yield",
      ],
      important: [
        "class",
        "def",
      ],
      types: [
        "int",
        "str",
        "float",
        "complex",
        "list",
        "tuple",
        "range",
        "dict",
        "set",
        "frozenset",
        "bool",
        "bytes",
        "bytearray",
        "memoryview",
        "NoneType"
      ],
      specials: ["self"]

}

export const javaKeywords : IKeywords= {
  basic: [
    "assert",
    "break",
    "case",
    "catch",
    "continue",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "goto",
    "if",
    "import",
    "instanceof",
    "new",
    "null",
    "package",
    "return",
    "switch",
    "this",
    "throw",
    "try",
    "while",
    "true",
    "false"
  ],
  important: [
    "abstract",
    "boolean",
    "byte",
    "char",
    "class",
    "double",
    "enum",
    "extends",
    "final",
    "float",
    "implements",
    "int",
    "interface",
    "long",
    "native",
    "private",
    "protected",
    "public",
    "short",
    "static",
    "strictfp",
    "super",
    "synchronized",
    "throws",
    "transient",
    "void",
    "volatile"
  ],
  types: [
    "String",
    "Object",
    "Integer",
    "Number",
    "Double",
    "Float",
    "Boolean"
  ],
  specials: [],
  
}

export const jsxKeywords: IKeywords = {
  basic: [...javaKeywords.basic, "as", "export", "default", "from", "undefined", "unknown"],
  important: [
    "const",
    "let",
    "var",
    "type",
    "function"
  ],
  types: [
    "bigint",
    "boolean",
    "number",
    "string",
    "String"
  ],
  specials: []
}