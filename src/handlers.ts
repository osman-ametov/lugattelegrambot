import config from 'config';
import { InlineQuery, Message } from 'node-telegram-bot-api';
import TelegramBot = require('node-telegram-bot-api');
import { findTranslation, getMessageType } from './services';
import { MessageType } from './types';

export const inlineQueryHandler = (bot: TelegramBot) => async (msg: InlineQuery) => {

  if (msg.query === undefined) {
    return;
  }

  const translation = await findTranslation(msg.query);
  const reply: TelegramBot.InlineQueryResultArticle[] = [
    {
      "type" : "article",
      "id" : "0",
      "title": translation.modified,
      "input_message_content" : {
        message_text: translation.modified
      }
    }
  ];	

  bot.answerInlineQuery(msg.id, reply);
};

export const messageHandler = (bot: TelegramBot) => async (msg: Message) => {
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
        const translationResult = await findTranslation(msg.text);
        bot.sendMessage(msg.chat.id, translationResult.response, {});
        break;
    }

  } catch (err) {
    reply = config.get<string>('message.internalError');
    bot.sendMessage(msg.chat.id, reply, { parse_mode: 'HTML' });
  }
};

export const errorHandler = () => {
  process.exit(1);
}