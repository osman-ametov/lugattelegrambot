import { knex } from './utils/knex';
import { preventInjection } from './utils/sql';
import { ITranslation } from './types';

export async function findRussianWord(word: string): Promise<ITranslation | undefined> {
  const result = await knex.select('*')
    .from('ru_chr')
    .where(knex.raw(`word LIKE '%${preventInjection(word)}'`))
    .limit(1);

  return result.length ? result[0] : undefined;
}

export async function findCrimeanWord(word: string): Promise<ITranslation | undefined> {
  const result = await knex.select('*')
    .from('chr_ru')
    .where(knex.raw(`word LIKE '%${preventInjection(word)}'`))
    .limit(1);

  return result.length ? result[0] : undefined;
}