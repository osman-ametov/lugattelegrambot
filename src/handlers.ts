import config from 'config';
import { InlineQuery, Message } from 'node-telegram-bot-api';
import TelegramBot = require('node-telegram-bot-api');
import { findTranslation, getMessageType, toInlineQueryAnswer } from './services';
import { MessageType } from './types';
import { logger } from './utils/logger';
import { knex } from './utils/knex';
import { insertUserQuery } from './repositories';

export const inlineQueryHandler = (bot: TelegramBot) => async (msg: InlineQuery) => {
  logger.debug('receive an inline message', msg);

  if (msg.query === undefined) {
    return;
  }

  let reply: string | undefined = undefined;
  let found = false;

  try {
    const messageType = getMessageType(msg.query);
    switch (messageType) {
      case MessageType.Namaz:
        reply = config.get<string>('message.notTranslator');
        await bot.answerInlineQuery(msg.id, toInlineQueryAnswer(reply));
        break;

      case MessageType.Sentence:
        reply = config.get<string>('message.notTranslator');
        await bot.answerInlineQuery(msg.id, toInlineQueryAnswer(reply));
        break;

      case MessageType.Word:
        const translation = await findTranslation(msg.query);
        reply = translation || config.get<string>('message.unknownWord');
        found = translation !== undefined;
        await bot.answerInlineQuery(msg.id, toInlineQueryAnswer(reply));
        break;
    }

    if (reply !== undefined) {
      await insertUserQuery(msg.query, reply, found);
    }

  } catch (err) {
    logger.error(err);
    reply = config.get<string>('message.internalError');
    await bot.answerInlineQuery(msg.id, toInlineQueryAnswer(reply));
  }
};

export const messageHandler = (bot: TelegramBot) => async (msg: Message) => {
  logger.debug('receive a message', msg);

  if (msg.text === undefined) {
    return;
  }

  let reply: string | undefined = undefined;
  let found = false;

  try {
    const messageType = getMessageType(msg.text);    
    switch (messageType) {
      case MessageType.Start:
        await bot.sendSticker(msg.chat.id, config.get<string>('telegram.sticker.hello'));
        break;

      case MessageType.Namaz:
        reply = config.get<string>('message.notTranslator');
        await bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
        break;

      case MessageType.Sentence:
        reply = config.get<string>('message.notTranslator');
        await bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
        break;

      case MessageType.Word:
        const translation = await findTranslation(msg.text);
        reply = translation || config.get<string>('message.unknownWord');
        found = translation !== undefined;
        await bot.sendMessage(msg.chat.id, reply, {});
        break;
    }

    if (reply !== undefined) {
      await insertUserQuery(msg.text, reply, found);
    }

  } catch (err) {
    logger.error(err);
    reply = config.get<string>('message.internalError');
    await bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
  }
};

export function errorHandler(err: any) {
  logger.error(err);
  knex.destroy();
  process.exit(1);
}
