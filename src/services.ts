import { Message } from 'node-telegram-bot-api';
import { ITranslationResult, MessageType, Translation } from './types';

export const findTranslation = async (word: string): Promise<ITranslationResult> => {
  try {
    
  } catch (err) {
    throw err;
  }

  return {
    response: word,
    modified: '',
    translation: Translation.ChrRu
  };
};

export const getMessageType = (msg: Message): MessageType => {
  if (msg.text === '#namaz') {
    return MessageType.Namaz;
  }
  
  return MessageType.Word;
};

export const parseNamazTime = () => {
  try {

  } catch (err) {

  }
}