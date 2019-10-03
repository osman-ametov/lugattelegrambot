export interface IProcessedMessage {
  response: string;
  modified: string;
  translation: Translation;
}

export interface ITranslationResult {
  response: string;
  modified: string;
  translation: Translation;
}

export enum Translation {
  RuChr = 'ru_chr',
  ChrRu = 'chr_ru'
}

export enum MessageType {
  Start,
  Namaz,
  Sentence,
  Word
}
