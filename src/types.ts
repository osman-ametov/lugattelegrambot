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

export interface INamazTime {
  cityId: number,
  n1: string,
  n2: string,
  n3: string,
  n4: string,
  n5: string,
  n6: string,
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
