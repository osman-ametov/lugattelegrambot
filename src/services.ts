import { MessageType } from './types';
import { transliterate } from './utils/transliterate';
import { 
  findRussianWord, 
  findCrimeanWord, 
} from './repositories';
import { InlineQueryResultArticle } from 'node-telegram-bot-api';

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

export function getMessageType (msg: string): MessageType {
  if (msg === '/start') {
    return MessageType.Start;
  }

  if (msg.split(' ').length > 2) {
    return MessageType.Sentence;
  }

  return MessageType.Word;
};

export function toInlineQueryAnswer(msg: string): InlineQueryResultArticle[] {
  return [
    {
      'type' : 'article',
      'id' : '0',
      'title': msg,
      'input_message_content' : {
        message_text: msg
      }
    }
  ];
}