/* eslint-disable consistent-return */
import { EStatusCode } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import getDateNow from './getDateNow';

const getOptionalFromStatistic = async () => {
  const response = await getUserStatistic();

  if (response.status === EStatusCode.OK) {
    const { optional } = await response.json();

    return optional;
  }

  if (response.status === EStatusCode.NOT_FOUND) {
    const optional = {
      date: getDateNow(),
      audiocall: {
        right: 0,
        wrong: 0,
        streak: 0,
      },
      sprint: {
        right: 0,
        wrong: 0,
        streak: 0,
      },
      appeared: 0,
      correctly: 0,
    };
    return optional;
  }
};

export default getOptionalFromStatistic;
