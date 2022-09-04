/* eslint-disable consistent-return */
import { EStatusCode } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import { TOptionalStat, TUserStat } from '@types';
import { getDateNow } from '@utils';

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
    };
    return optional;
  }
};

export default getOptionalFromStatistic;
