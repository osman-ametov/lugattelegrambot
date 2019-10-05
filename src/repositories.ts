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

export async function insertNamazTimes(cityId: number, times: string[]) {
  return knex('namaztime').insert([{
    date: knex.raw('NOW()'),
    city_id: cityId,
    n1: times[0],
    n2: times[1],
    n3: times[2],
    n4: times[3],
    n5: times[4],
    n6: times[5],
  }]);
}

export async function isCrawledToday(cityId: number): Promise<boolean> {
  const rows = await knex('namaztime')
    .select(['id'])
    .where('city_id', cityId)
    .where(knex.raw('DATE(date) = DATE(NOW())'))
    .orderBy('id', 'desc')
    .limit(1);

  return rows.length > 0;
}

export async function insertUserQuery(query: string, word: string, found: boolean) {
  return knex('user_queries').insert([{
    date: knex.raw('NOW()'),
    query,
    word,
    found,
  }]);
}
