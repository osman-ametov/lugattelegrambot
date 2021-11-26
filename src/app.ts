import config from 'config';
import TelegramBot from 'node-telegram-bot-api';
import { inlineQueryHandler, messageHandler, errorHandler } from './handlers';
import { logger } from './utils/logger';

logger.info('Start bot', config);

const { token, options } = config.get('telegram');
const bot = new TelegramBot(token, { ...options });

bot.on('inline_query', inlineQueryHandler(bot));
bot.on('message', messageHandler(bot));
bot.on('polling_error', (err) => logger.error(err));

process.on('uncaughtException', errorHandler);
process.on('unhandledRejection', errorHandler);