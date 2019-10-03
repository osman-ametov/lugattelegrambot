module.exports = {
  telegram: {
    token: process.env.TELEGRAM_TOKEN || '850030005:AAGhJMAdpOqphAFvTGSnGrH5o2qYPL24cxU',
    username: process.env.TELEGRAM_USERNAME || 'qitlugat2bot',
    options: {
      polling: true
    },
    sticker: {
      hello: 'BQADAgADHwADnW_yAoE5r-uounSVAg',
    }
  },

  namaz: {
    cron: process.env.NAMAZ_CRON || '0 0 * * * *'
  },

  message: {
    notTranslator: process.env.MSG_NOT_A_TRANSLATOR || 'Я словарь, а не переводчик',
    unknownWord: process.env.MSG_UNKNOWN_WORD || 'Не знаю это слово :(',
    internalError: process.env.MSG_INTERNAL_ERROR || 'Кажется что-то пошло не так',
  },

  database: {
    host: process.env.DB_HOST || 'localhsot',
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_NAME || 'lugat',
    host: process.env.DB_USER || 'root',
    host: process.env.DB_PASS || 'root',
  },
};
