require('dotenv').config()

module.exports = {
  name: 'Lugat Telegram Bot',
  logLevel: process.env.LOG_LEVEL || 'debug',

  telegram: {
    token: process.env.TELEGRAM_TOKEN,
    username: process.env.TELEGRAM_USERNAME,
    options: {
      polling: true
    },
    sticker: {
      hello: 'BQADAgADHwADnW_yAoE5r-uounSVAg',
    }
  },

  message: {
    notTranslator: process.env.MSG_NOT_A_TRANSLATOR,
    unknownWord: process.env.MSG_UNKNOWN_WORD,
    internalError: process.env.MSG_INTERNAL_ERROR,
  },

  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};
