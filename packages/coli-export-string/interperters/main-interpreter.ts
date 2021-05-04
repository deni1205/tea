import { Block, Snippet, Types } from "coli/lib";
import { Identifier } from "coli/lib/ast";
import { FunctionDeclaration } from "coli/lib/declarations/function";
import { CommentExpression } from "coli/lib/expressions/comment";
import { ColiObject } from "coli/lib/_abstract";
import { StringfyLanguage } from "..";
import { ESInterpreter } from "./es-interpreter";
type Keyword = string;
type KindInterpreter<T extends ColiObject | string = string> =
  | ((coli: T, language?: StringfyLanguage) => string)
  | Keyword;

export interface LanguageInterpreterMap {
  FunctionKeyword: KindInterpreter;
  SingleCommentKeyword: KindInterpreter;
  MultiCommentKeyword: KindInterpreter;
  __WIDLCARD__: KindInterpreter<Snippet | any>;
}

export function languageInterpreter(
  l: StringfyLanguage
): LanguageInterpreterMap {
  switch (l) {
    case "typescript":
    case "tsx":
      return ESInterpreter;
  }
}