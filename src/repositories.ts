import { knex } from './utils/knex';
import { preventInjection } from './utils/sql';
import { ITranslation } from './types';

async function findWord(table: string, word: string): Promise<ITranslation | undefined> {
  const result = await knex.select('*')
    .from(table)
    .where('word', preventInjection(word))
    .limit(1);

  return result.length ? result[0] : undefined;
}

export async function findRussianWord(word: string): Promise<ITranslation | undefined> {
  return findWord('ru_chr', word);
}

export async function findCrimeanWord(word: string): Promise<ITranslation | undefined> {
  return findWord('chr_ru', word);
}
