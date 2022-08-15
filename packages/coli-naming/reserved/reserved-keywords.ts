const general = [
  //
  "import", // es, py
  "as", // es, py
  "from", // es, py
  //
  "get", // ts, c#
  "set", // ts, c#
  //
  "is",
  "by",
  "of",
  "new",
  //
  "if",
  "else",
  "elif",
  //
  //
  "this",
  "self",
  //
  "const",
  "let",
  "var",
  //
  "interface",
  "struct",
  "type",
  "class",
  "fun",
  "func",
  "function",
  "def",
  "fi",
  "eq",
  "lt",
  "gt",
  //
  "string",
  "number",
  "void",
  "float",
];

const typescript = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "If",
  "import",
  "in",
  "istanceOf",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeOf",
  "var",
  "void",
  "while",
  "with",
  "as",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "any",
  "boolean",
  "constructor",
  "declare",
  "get",
  "module",
  "require",
  "number",
  "set",
  "string",
  "symbol",
  "type",
  "from",
  "of",
  // literals
  "NaN",
  "Infinity",
  "String",
  "string",
  "number",
  "boolean",
  "Boolean",
] as const;

const jsx = ["JSX"] as const;

const python = [
  "and",
  "assert",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "exec",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "not",
  "or",
  "pass",
  "print",
  "raise",
  "return",
  "try",
  "while",
  "Data",
  "Float",
  "Int",
  "Numeric",
  "Oxphys",
  "array",
  "close",
  "float",
  "int",
  "input",
  "open",
  "range",
  "type",
  "write",
  "zeros",
  "acos",
  "asin",
  "atan",
  "cos",
  "e",
  "exp",
  "fabs",
  "floor",
  "log",
  "log10",
  "pi",
  "sin",
  "sqrt",
  "tan",
] as const;

const php = [
  "__halt_compiler",
  "abstract",
  "and",
  "array",
  "as",
  "break",
  "callable",
  "case",
  "catch",
  "class",
  "clone",
  "const",
  "continue",
  "declare",
  "default",
  "die",
  "do",
  "echo",
  "else",
  "elseif",
  "empty",
  "enddeclare",
  "endfor",
  "endforeach",
  "endif",
  "endswitch",
  "endwhile",
  "eval",
  "exit",
  "extends",
  "final",
  "finally",
  "for",
  "foreach",
  "function",
  "global",
  "goto",
  "if",
  "implements",
  "include",
  "include_once",
  "instanceof",
  "insteadof",
  "interface",
  "isset",
  "list",
  "namespace",
  "new",
  "or",
  "print",
  "private",
  "protected",
  "public",
  "require",
  "require_once",
  "return",
  "static",
  "switch",
  "throw",
  "trait",
  "try",
  "unset",
  "use",
  "var",
  "while",
  "xor",
  "yield",
] as const;

const java = [
  "abstract",
  "assert",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "default",
  "do",
  "double",
  "else",
  "enum",
  "extends",
  "final",
  "finally",
  "float",
  "for",
  "goto",
  "if",
  "implement",
  "imports",
  "instanceof",
  "int",
  "interface",
  "long",
  "native",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "strictfp",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "try",
  "void",
  "volatile",
  "while",
  "false",
  "null",
  "true",
] as const;

const csharp = [
  "abstract",
  "as",
  "base",
  "bool",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "checked",
  "class",
  "const",
  "continue",
  "decimal",
  "default",
  "delegate",
  "do",
  "double",
  "else",
  "enum",
  "event",
  "explicit",
  "extern",
  "false",
  "finally",
  "fixed",
  "float",
  "for",
  "foreach",
  "goto",
  "if",
  "implicit",
  "in",
  "int",
  "interface",
  "internal",
  "is",
  "lock",
  "long",
  "namespace",
  "new",
  "null",
  "object",
  "operator",
  "out",
  "override",
  "params",
  "private",
  "protected",
  "public",
  "readonly",
  "ref",
  "return",
  "sbyte",
  "sealed",
  "short",
  "sizeof",
  "stackalloc",
  "static",
  "string",
  "struct",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "uint",
  "ulong",
  "unchecked",
  "unsafe",
  "ushort",
  "using",
  "virtual",
  "void",
  "volatile",
  "while",
  //
  "add",
  "alias",
  "ascending",
  "async",
  "await",
  "descending",
  "dynamic",
  "from",
  "get",
  "global",
  "group",
  "into",
  "join",
  "let",
  "orderby",
  "partial",
  "remove",
  "select",
  "set",
  "value",
  "var",
  "where",
  "yield",
] as const;

const cpp = [
  "auto",
  "break",
  "case",
  "char",
  "continue",
  "default",
  "do",
  "double",
  "else",
  "entry",
  "extern",
  "float",
  "for",
  "goto",
  "if",
  "int",
  "long",
  "register",
  "return",
  "short",
  "sizeof",
  "static",
  "struct",
  "switch",
  "typedef",
  "union",
  "unsigned",
  "void",
  "volatile",
  "while",
  // new
  "asm",
  "bool",
  "catch",
  "class",
  "const_cast",
  "delete",
  "dynamic_cast",
  "explicit",
  "false",
  "friend",
  "inline",
  "mutable",
  "namespace",
  "new",
  "operator",
  "private",
  "public",
  "protected",
  "reinterpret_cast",
  "static_cast",
  "template",
  "this",
  "throw",
  "true",
  "try",
  "typeid",
  "typename",
  "using",
  "virtual",
  "wchar_t",
  "and",
  "and_eq",
  "bitand",
  "bitor",
  "compl",
  "not",
  "not_eq",
  "or",
  "or_eq",
  "xor",
  "xor_eq",
  "cin",
  "cout",
  "endl",
  "include",
  "INT_MIN",
  "INT_MAX",
  "iomanip",
  "iostream",
  "main",
  "MAX_RAND",
  "npos",
  "NULL",
  "std",
  "string",
] as const;

const react = [
  "React",
  "Children",
  "Component",
  "Fragment",
  "Profiler",
  "PureComponent",
  "StrictMode",
  "Suspense",
  "cloneElement",
  "createContext",
  "createElement",
  "createFactory",
  "createRef",
  "forwardRef",
  "isValidElement",
  "lazy",
  "memo",
  "useCallback",
  "useContext",
  "useDebugValue",
  "useEffect",
  "useImperativeHandle",
  "useLayoutEffect",
  "useMemo",
  "useReducer",
  "useRef",
  "useState",
  "version",
];

const html = [
  "a",
  "abbr",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "base",
  "bdo",
  "bgsound",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "col",
  "colgroup",
  "command",
  "comment",
  "datalist",
  "dd",
  "del",
  "details",
  "dir",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figure",
  "b",
  "big",
  "i",
  "small",
  "tt",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "head",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "isindex",
  "iframe",
  "ilayer",
  "img",
  "input",
  "ins",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "cite",
  "code",
  "dfn",
  "em",
  "kbd",
  "samp",
  "strong",
  "var",
  "plaintext",
  "pre",
  "progress",
  "q",
  "ruby",
  "script",
  "section",
  "select",
  "spacer",
  "span",
  "s",
  "strike",
  "style",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "u",
  "ul",
  "video",
  "wbr",
  "wbr",
];

/**
 * solid-js reserved keywords from
 * - solid-js/web
 * - solid-js/store
 * > https://www.solidjs.com/docs/latest/api
 */
const solidjs = [
  "createSignal",
  "createEffect",
  "createMemo",
  "createResource",
  "onMount",
  "onCleanup",
  "onError",
  "untrack",
  "batch",
  "on",
  "createRoot",
  "getOwner",
  "runWithOwner",
  "mergeProps",
  "splitProps",
  "useTransition",
  "startTransition",
  "observable",
  "from",
  "mapArray",
  "indexArray",
  "createStore",
  "StoreNode",
  "Store",
  "SetStoreFunction",
  "produce",
  "reconcile",
  "unwrap",
  "createMutable",
  "createContext",
  "useContext",
  "children",
  "lazy",
  "createUniqueId",
  "createDeferred",
  "createRenderEffect",
  "createComputed",
  "createReaction",
  "createSelector",
  "render",
  "hydrate",
  "renderToString",
  "renderToStringAsync",
  "renderToStream",
  "isServer",
  "DEV",
  "HydrationScript",
  // tags
  "For",
  "Show",
  "Switch",
  "Match",
  "Index",
  "ErrorBoundary",
  "Suspense",
  "SuspenseList",
  "Dynamic",
  "Portal",
];

/**
 * lang reserved keywords mappings
 * Note: changing the key name will cause side effects.
 */
export const RESERVED_KEYWORDS = {
  general: general,
  csharp: csharp,
  cpp: cpp,
  typescript: typescript,
  python: python,
  java: java,
  php: php,
  react: react,
  jsx: jsx,
  html: html,
  "solid-js": solidjs,
} as const;

export const ALL_RESERVED_KEYWORDS_PRESET = [
  ...general,
  ...csharp,
  ...cpp,
  ...python,
  ...java,
  ...php,
  ...typescript,
  ...react,
  ...html,
  ...solidjs,
];
