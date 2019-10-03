import config from 'config';
import { InlineQuery, Message } from 'node-telegram-bot-api';
import TelegramBot = require('node-telegram-bot-api');
import { findTranslation, getMessageType } from './services';
import { MessageType } from './types';
import { logger } from './utils/logger';
import { knex } from './utils/knex';

export const inlineQueryHandler = (bot: TelegramBot) => async (msg: InlineQuery) => {

  if (msg.query === undefined) {
    return;
  }

  const translation = await findTranslation(msg.query);
  const reply: TelegramBot.InlineQueryResultArticle[] = [
    {
      "type" : "article",
      "id" : "0",
      "title": 'translation',
      "input_message_content" : {
        message_text: translation
      }
    }
  ];	

  bot.answerInlineQuery(msg.id, reply);
};

export const messageHandler = (bot: TelegramBot) => async (msg: Message) => {
  logger.debug('receive a message', msg);

  if (msg.text === undefined) {
    return;
  }

  let reply: string;

  try {
    const messageType = getMessageType(msg);    
    switch (messageType) {
      case MessageType.Start:
        bot.sendSticker(msg.chat.id, config.get<string>('telegram.sticker.hello'));
        break;

      case MessageType.Namaz:
        reply = config.get<string>('message.notTranslator');
        bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
        break;

      case MessageType.Sentence:
        reply = config.get<string>('message.notTranslator');
        bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
        break;

      case MessageType.Word:
        const translation = await findTranslation(msg.text);
        reply = translation || config.get<string>('messages.unknownWord');
        await bot.sendMessage(msg.chat.id, reply, {});
        break;
    }

  } catch (err) {
    logger.error(err);
    reply = config.get<string>('message.internalError');
    bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
  }
};

export function errorHandler(err: any) {
  logger.error(err);
  knex.destroy();
  process.exit(1);
}