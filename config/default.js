module.exports = {
  telegram: {
    token: process.env.TELEGRAM_TOKEN || '211118825:AAEeraGsFu8QkJFlo_qg4lvVQ2W8vG-4JyE',
    username: process.env.TELEGRAM_USERNAME || 'qitlugatbot',
    options: {
      polling: true
    },
    sticker: {
      hello: 'BQADAgADHwADnW_yAoE5r-uounSVAg',
    }
  },

  message: {
    notTranslator: process.env.MSG_NOT_A_TRANSLATOR || 'Я словарь, а не переводчик',
    unknownWord: process.env.MSG_UNKNOWN_WORD || 'Не знаю это слово :(',
  },

  database: {

  },
};