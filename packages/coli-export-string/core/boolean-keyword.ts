import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { BooleanKeyword } from "coli";
import { StringfyLanguage } from "..";

export function strfy_boolean_keyword(
  c: BooleanKeyword,
  l: StringfyLanguage
): string {
  return KeywordAndTokenStatic.BooleanKeyword;
}
