import { EStatusCode, ZERO } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import updateUserStatistic from '@services/users/statistic/updateUserStatistic';
import { TUserStat } from '@types';
import updateWordsData from './updateWordsData';

const setWordsData = async () => {
  const response = await getUserStatistic();

  if (response.status === EStatusCode.OK) {
    const { optional }: TUserStat = await response.json();

    updateWordsData(optional.textbook.group, optional.textbook.page);
  } else if (response.status === EStatusCode.NOT_FOUND) {
    const optional = {
      date: 'null',
      audiocall: {
        date: 'null',
        correct: 0,
        attempts: 0,
        streak: 0,
      },
      sprint: {
        date: 'null',
        correct: 0,
        attempts: 0,
        streak: 0,
      },
      appeared: 0,
      correct: 0,
      textbook: {
        group: ZERO,
        page: ZERO,
      },
    };

    await updateUserStatistic(0, optional);
  }
};

export default setWordsData;
