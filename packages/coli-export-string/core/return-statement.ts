import { JsxBaseElement } from "@coli.codes/jsx-core/elements";
import { ReturnStatement } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { indent, KeywordAndTokenStatic } from "@coli.codes/export-string-core";

export function strfy_return_statement(
  c: ReturnStatement,
  l: StringfyLanguage
): string {
  const { argument } = c;
  if (argument instanceof JsxBaseElement) {
    return `${KeywordAndTokenStatic.ReturnKeyword}${
      KeywordAndTokenStatic.BreakSpaceToken
    }${KeywordAndTokenStatic.OpenParenToken}
    ${indent.onEachLine(stringfy(argument, { language: l }))}
  ${KeywordAndTokenStatic.CloseParenToken}`;
  }
  return `${KeywordAndTokenStatic.ReturnKeyword}${
    KeywordAndTokenStatic.BreakSpaceToken
  }${stringfy(argument, {
    language: l,
  })}`;
}
