import { Message } from 'node-telegram-bot-api';
import { MessageType } from './types';
import { logger } from './utils/logger';
import { findRussianWord, findCrimeanWord } from './repositories';
import { transliterate } from './utils/transliterate';

export async function findTranslation(word: string): Promise<string | undefined> {
  const russianWord = await findRussianWord(word);
  if (russianWord) {
    return russianWord.translation;
  }

  let crimeanWord = await findCrimeanWord(word);
  if (crimeanWord) {
    return crimeanWord.translation;
  }

  crimeanWord = await findCrimeanWord(transliterate(word));
  if (crimeanWord) {
    return crimeanWord.translation;
  }

  return undefined;
};

export function getMessageType (msg: Message): MessageType {
  if (msg.text === '#namaz') {
    return MessageType.Namaz;
  }

  return MessageType.Word;
};

export function parseNamazTime() {
  try {
    logger.debug('Start crawling');
    logger.debug('Finish crawling');
  } catch (err) {
    logger.error('Crawling error', err);
  }
}