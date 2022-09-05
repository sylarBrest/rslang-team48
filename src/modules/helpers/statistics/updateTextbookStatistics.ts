import { EStatusCode } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import updateUserStatistic from '@services/users/statistic/updateUserStatistic';
import { wordsDataLocal } from '@store';
import { TUserStat } from '@types';
import getKnownWords from './getKnownWords';

const updateTextbookStatistics = async () => {
  const response = await getUserStatistic();
  const knownWords = await getKnownWords();

  if (response.status === EStatusCode.OK) {
    const { optional }: TUserStat = await response.json();

    optional.textbook.group = wordsDataLocal.group;
    optional.textbook.page = wordsDataLocal.page;

    await updateUserStatistic(knownWords.count, optional);
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
        group: wordsDataLocal.group,
        page: wordsDataLocal.page,
      },
    };

    await updateUserStatistic(knownWords.count, optional);
  }
};

export default updateTextbookStatistics;
