import type { InterfaceDeclaration } from "@coli.codes/core";

import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_interface_declaration(c: InterfaceDeclaration) {
  return [
    f(SyntaxKind.InterfaceKeyword),
    f(" "),
    c.name,
    f(" "),
    f(SyntaxKind.OpenBraceToken),
    inject.onEach(c.members, f("\t")),
    f(SyntaxKind.CloseBraceToken),
  ];
}
