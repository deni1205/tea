import { StringfyLanguage } from "..";

export function converValue(v: any, l: StringfyLanguage) {
  switch (l) {
    case "javascript":
    case "jsx":
    case "typescript":
    case "tsx":
    case "html":
      return converESValue(v);
    case "dart":
      return converDartValue(v);
    case "python":
      return converPythonValue(v);
  }
}

/*@internal*/
function converESValue(v: any) {
  switch (typeof v) {
    case "string":
      return `"${v}}`;
  }
  return "ERROR IN CONVERT";
}

/*@internal*/
function converDartValue(v: any) {}

/*@internal*/
function converPythonValue(v: any) {}
