/* eslint-disable consistent-return */
import { EStatusCode } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import { getDateNow } from '@utils';
import { wordsDataLocal } from '@store';
import { TOptionalStat, TUserStat } from '@types';

const getOptionalFromStatistic = async (): Promise<TOptionalStat | void> => {
  const response = await getUserStatistic();

  if (response.status === EStatusCode.OK) {
    const { optional }: TUserStat = await response.json();

    return optional;
  }

  if (response.status === EStatusCode.NOT_FOUND) {
    const dateToday = getDateNow();
    const optional = {
      date: dateToday,
      audiocall: {
        date: dateToday,
        correct: 0,
        attempts: 0,
        streak: 0,
      },
      sprint: {
        date: dateToday,
        correct: 0,
        attempts: 0,
        streak: 0,
      },
      appeared: 0,
      correct: 0,
      textbook: {
        group: wordsDataLocal.group,
        page: wordsDataLocal.page,
      },
    };
    return optional;
  }
};

export default getOptionalFromStatistic;
