import { Message, InlineQuery } from 'node-telegram-bot-api';
import { MessageType } from './types';
import TelegramBot = require('node-telegram-bot-api');
import config from 'config';
import { findTranslation } from './services';

const getMessageType = (msg: Message): MessageType => {
  return MessageType.Word;
}

export const inlineQueryHandler = (bot: TelegramBot) => async (msg: InlineQuery) => {

  if (!msg.query) {
    return;
  }

  const processedMessage = await findTranslation(msg);

	// processMessage(msg, function(err, chatId, response, modified, translation){
	// 	if (err instanceof Error)
	// 		response = 'Что-то пошло не так. Попробуйте чуть позже';

	// 	if (err != null)
	// 		response = err;
	// 	else
	// 		translation = null;

	// 	db.insertUserQuery(text, modified || text, err !== null, translation, function(){});

	// 	if (null != translation) {
	// 		var resp = [
	// 			{
	// 				'type' : 'article',
	// 				'id' : '0',
	// 				'title': text,
	// 				'input_message_content' : {
	// 					message_text: response
	// 				}
	// 			}
	// 		];		

	// 		bot.answerInlineQuery(chatId, resp);
	// 	}
	// });
};

export const messageHandler = (bot: TelegramBot) => async (msg: Message) => {
  try {
    let reply: string;

    if (msg.text === undefined) {
      return;
    }

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

  }
};