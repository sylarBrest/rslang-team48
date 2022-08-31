import { TRUE } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import updateUserStatistic from '@services/users/statistic/updateUserStatistic';
import { temporalWordsData } from '@store';
import { TUserStat } from '@types';
import getMaxStreak from './getMaxStreak';
import isSprintGame from './isSprintGame';

const changeGameStats = async () => {
  const answers = temporalWordsData.gameAnswers;
  const response = await getUserStatistic();
  const streak = getMaxStreak(answers, TRUE);
  const isSprint = isSprintGame();

  const { learnedWords, optional }: TUserStat = await response.json();

  optional.appeared += answers.length;
  optional.correctly += answers.filter((el) => el.isCorrectAnswer === TRUE).length;

  if (isSprint) {
    optional.sprint.streak
  }

  await updateUserStatistic(learnedWords, optional);
};

export default changeGameStats;
