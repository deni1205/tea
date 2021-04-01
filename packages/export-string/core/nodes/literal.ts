import { Literal } from "coli/lib/ast";
import { TemplateLiteral } from "coli/lib/ast/template-literal";
import { StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

export function coliLiteralStringfy(c: Literal, l: StringfyLanguage): string {
  const { value } = c;
  const isTemplateLiteral = c instanceof TemplateLiteral;
  let code = "";
  if (!isTemplateLiteral) {
    code += `${converValue(value, l)}`;
  } else if (isTemplateLiteral) {
    code += `\`${value}\``;
  }
  return code;
}