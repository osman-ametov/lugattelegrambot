export interface ITranslation {
  word: string;
  translation: string;
}

export interface IUserQuery {
  query: string;
  word: string;
  found: boolean;
  translation: TranslationType;
}

export enum TranslationType {
  RuChr = 'ru_chr',
  ChrRu = 'chr_ru'
}

export enum MessageType {
  Start,
  Namaz,
  Sentence,
  Word
}
