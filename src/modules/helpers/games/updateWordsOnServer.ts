import { EDifficulty, FALSE, TRUE } from '@constants';
import createUserWord from '@services/users/words/createUserWord';
import getAllUserWords from '@services/users/words/getAllUserWords';
import updateUserWord from '@services/users/words/updateUserWord';
import { temporalWordsData } from '@store';
import { TUserWord } from '@types';
import getDateNow from './getDateNow';

const updateWordsOnServer = async () => {
  const answers = temporalWordsData.gameAnswers;
  const allUserWordsResp = await getAllUserWords();
  const allUserWordsResult: TUserWord[] = await allUserWordsResp.json();
  const promises: Promise<Response>[] = [];

  answers.forEach((item) => {
    const userWord = allUserWordsResult.find((elem) => elem.wordId === item.id);
    if (userWord) {
      let { difficulty } = userWord;
      const { optional } = userWord;

      optional.appeared += 1;

      if (difficulty === EDifficulty.UNSET && optional.series === 2 && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.dateKnown = getDateNow();
        optional.correct += 1;
        optional.series = 0;
      } else if (difficulty === EDifficulty.UNSET && item.isCorrectAnswer === TRUE) {
        optional.correct += 1;
        optional.series += 1;
      } else if (difficulty === EDifficulty.UNSET && item.isCorrectAnswer === FALSE) {
        optional.series = 0;
      } else if (difficulty === EDifficulty.KNOWN && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.correct += 1;
      } else if (difficulty === EDifficulty.KNOWN && item.isCorrectAnswer === FALSE) {
        difficulty = EDifficulty.UNSET;
      } else if (difficulty === EDifficulty.HARD && optional.series === 4 && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.correct += 1;
        optional.series = 0;
      } else if (difficulty === EDifficulty.HARD && item.isCorrectAnswer === TRUE) {
        optional.correct += 1;
        optional.series += 1;
      } else if (difficulty === EDifficulty.HARD && item.isCorrectAnswer === FALSE) {
        optional.series = 0;
      }

      promises.push(updateUserWord(item.id, difficulty, optional));
    } else {
      const optional = {
        isNew: true,
        dateNew: getDateNow(),
        dateKnown: 'null',
        gameNew: 'sprint',
        appeared: 1,
        correct: item.isCorrectAnswer === TRUE ? 1 : 0,
        series: item.isCorrectAnswer === TRUE ? 1 : 0,
      };

      promises.push(createUserWord(item.id, EDifficulty.UNSET, optional));
    }
  });

  Promise.all(promises);
};

export default updateWordsOnServer;
