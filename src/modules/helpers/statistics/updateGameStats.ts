import { EStatusCode, TRUE } from '@constants';
import getUserStatistic from '@services/users/statistic/getUserStatistic';
import updateUserStatistic from '@services/users/statistic/updateUserStatistic';
import { temporalWordsData, wordsDataLocal } from '@store';
import { getDateNow } from '@utils';
import { TUserStat, TGameStat, TOptionalStat } from 'modules/types/optional';
import { TSprintGameAnswers } from 'modules/types/words';
import { getMaxStreak, isSprintGame } from '../games';
import getKnownWords from './getKnownWords';

const updateGameStats = async () => {
  const answers: TSprintGameAnswers[] = temporalWordsData.gameAnswers;
  const streak = getMaxStreak(answers, TRUE);
  const isSprint = isSprintGame();
  const dateToday = getDateNow();
  const rightAnswer = answers.filter((el) => el.isCorrectAnswer === TRUE).length;
  const response = await getUserStatistic();
  const knownWords = await getKnownWords();

  if (response.status === EStatusCode.OK) {
    const { optional }: TUserStat = await response.json();

    if (optional.date === dateToday) {
      optional.appeared += answers.length;
      optional.correct += rightAnswer;
    } else {
      optional.date = dateToday;
      optional.appeared = answers.length;
      optional.correct = rightAnswer;
    }

    const gameOptional = <TGameStat>optional[temporalWordsData.game as keyof TOptionalStat];

    if (gameOptional.date === dateToday) {
      gameOptional.attempts += answers.length;
      gameOptional.correct += rightAnswer;
      gameOptional.streak = Math.max(gameOptional.streak, streak);
    } else {
      gameOptional.date = dateToday;
      gameOptional.attempts = answers.length;
      gameOptional.correct = rightAnswer;
      gameOptional.streak = streak;
    }

    await updateUserStatistic(knownWords.count, optional);
  } else if (response.status === EStatusCode.NOT_FOUND) {
    const optional = {
      date: dateToday,
      audiocall: {
        date: dateToday,
        correct: !isSprint ? rightAnswer : 0,
        attempts: answers.length,
        streak: !isSprint ? streak : 0,
      },
      sprint: {
        date: dateToday,
        correct: isSprint ? rightAnswer : 0,
        attempts: answers.length,
        streak: isSprint ? streak : 0,
      },
      appeared: answers.length,
      correct: rightAnswer,
      textbook: {
        group: wordsDataLocal.group,
        page: wordsDataLocal.page,
      },
    };

    await updateUserStatistic(knownWords.count, optional);
  }
};

export default updateGameStats;
