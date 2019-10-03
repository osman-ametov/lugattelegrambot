import config from 'config';
import TelegramBot from 'node-telegram-bot-api';
import { inlineQueryHandler, messageHandler } from './handlers';

const { token, options } = config.get('telegram');
const bot = new TelegramBot(token, options);

bot.on('inline_query', inlineQueryHandler(bot));
bot.on('message', messageHandler(bot));
