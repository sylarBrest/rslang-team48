import { EStatusCode, FALSE, TRUE } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import updateUserStatistic from '@services/users/statistic/updateUserStatistic';
import { temporalWordsData } from '@store';
import { TUserStat } from '@types';
import getDateNow from './getDateNow';
import getMaxStreak from './getMaxStreak';
import isSprintGame from './isSprintGame';

const updateGameStats = async () => {
  const answers = temporalWordsData.gameAnswers;
  const streak = getMaxStreak(answers, TRUE);
  const isSprint = isSprintGame();
  const dateToday = getDateNow();
  const rightAnswer = answers.filter((el) => el.isCorrectAnswer === TRUE).length;
  const wrongAnswer = answers.filter((el) => el.isCorrectAnswer === FALSE).length;
  const response = await getUserStatistic();

  if (response.status === EStatusCode.OK) {
    const { learnedWords, optional }: TUserStat = await response.json();

    optional.appeared += answers.length;
    optional.correctly += answers.filter((el) => el.isCorrectAnswer === TRUE).length;

    if (isSprint && optional.date === dateToday) {
      optional.sprint.right += rightAnswer;
      optional.sprint.wrong += wrongAnswer;
      optional.sprint.streak = Math.max(optional.sprint.streak, streak);
    } else if (isSprint && optional.date !== dateToday) {
      optional.date = dateToday;
      optional.sprint.right = rightAnswer;
      optional.sprint.wrong = wrongAnswer;
      optional.sprint.streak = streak;
    } else if (!isSprint && optional.date === dateToday) {
      optional.audiocall.right += rightAnswer;
      optional.audiocall.wrong += wrongAnswer;
      optional.audiocall.streak = Math.max(optional.audiocall.streak, streak);
    } else if (!isSprint && optional.date !== dateToday) {
      optional.date = dateToday;
      optional.audiocall.right = rightAnswer;
      optional.audiocall.wrong = wrongAnswer;
      optional.audiocall.streak = streak;
    }

    await updateUserStatistic(learnedWords, optional);
  } else if (response.status === EStatusCode.NOT_FOUND) {
    const optional = {
      date: dateToday,
      audiocall: {
        right: !isSprint ? rightAnswer : 0,
        wrong: !isSprint ? wrongAnswer : 0,
        streak: !isSprint ? streak : 0,
      },
      sprint: {
        right: isSprint ? rightAnswer : 0,
        wrong: isSprint ? wrongAnswer : 0,
        streak: isSprint ? streak : 0,
      },
      appeared: answers.length,
      correctly: rightAnswer,
    };

    await updateUserStatistic(0, optional);
  }
};

export default updateGameStats;
