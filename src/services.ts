import { ITranslationResult, Translation } from "./types";

export const findTranslation = async (word: string): Promise<ITranslationResult> => {
  return {
    response: word,
    modified: '',
    translation: Translation.ChrRu
  };
}