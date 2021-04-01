import { FunctionDeclaration } from "coli/lib/declarations/function";
import { stringfy, StringfyLanguage } from "../..";

export function coliFunctionStringfy(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
  const {
    id,
    params,
    body: { body },
    returnType: { keyword: type },
  } = c;
  let code = `function ${id.name}(`;

  code += params
    .map((p) => `${p.name} : ${p.typeAnnotation.keyword}`)
    .join(", ");

  code += `) : ${type} {\n`;

  const stringfyBody = body
    .map((i) => {
      if (Array.isArray(i)) {
        return stringfy(i, {
          language: l,
        });
      }
    })
    .flat()
    .join("\n");

  code += stringfyBody + "\n";

  code += "}";

  return code;
}
