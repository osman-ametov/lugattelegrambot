import { MessageType } from './types';
import { logger } from './utils/logger';
import { transliterate } from './utils/transliterate';
import request from 'request-promise-native';
import config from 'config';
import cheerio from 'cheerio';
import { 
  findRussianWord, 
  findCrimeanWord, 
  insertNamazTimes, 
  isCrawledToday 
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
  if (msg === '#namaz') {
    return MessageType.Namaz;
  }

  if (msg === '/start') {
    return MessageType.Start;
  }

  if (msg.split(' ').length > 2) {
    return MessageType.Sentence;
  }

  return MessageType.Word;
};

export async function parseNamazTime() {
  try {
    logger.debug('Start crawling');

    const pattern = /^\d{1,2}:\d{2}$/g;
    const countOfTimes = 6;
    const { url, cityId } = config.get('namaz');

    if (await isCrawledToday(cityId)) {
      logger.debug('Already crawled today');
      return;
    }

    const body = await request(url);

    const $ = cheerio.load(body);
    const trs = $('table td:nth-child(2)'); 

    const times = $(trs)
      .map((_i, tr: CheerioElement) => $(tr).text()).get()
      .filter((text: string) => text.match(pattern));

  	if (times.length === countOfTimes) {
      await insertNamazTimes(cityId, times);
  	}

    logger.debug('Finish crawling');
  } catch (err) {
    logger.error('Crawling error', err);
  }
}

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