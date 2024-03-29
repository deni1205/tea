import type { JSXSelfClosingElement } from "@coli.codes/jsx-core";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { astfmt_jsx_with_attributes } from "./utils/jsx-with-attributes";

export function astfmt_jsx_self_closing_element(c: JSXSelfClosingElement) {
  const { name, attributes } = c;
  return astfmt_jsx_with_attributes({
    name: name,
    open_token: SyntaxKind.LessThanToken,
    close_token: "/>",
    attributes: attributes,
  });
}
