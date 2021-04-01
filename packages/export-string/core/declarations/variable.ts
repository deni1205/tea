import { Identifier, Literal } from "coli/lib/ast";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliVariableStringfy(
  c: VariableDeclaration,
  l: StringfyLanguage
): string {
  const {
    kind,
    type: { keyword: type },
    id: { name },
    initializer,
  } = c;
  let code = "";

  code += `${kind} ${name}`;

  if (type) {
    code += ` : ${type}`;
  }

  if (initializer instanceof Literal) {
    const { value } = initializer;
    code += ` = ${converValue(value, l)}`;
  }

  if (initializer instanceof TaggedTemplateExpression) {
    const {
      tag,
      template: { value },
    } = initializer;
    code += ` = `;

    if (tag instanceof PropertyAccessExpression) {
      const { expression, name } = tag;

      if (expression instanceof Identifier) {
        const { name } = expression;
        code += `${name}`;
      }

      code += `.${name}`;
    }

    code += "`";
    code += `${value}`;
    code += "`";
  }

  return code;
}