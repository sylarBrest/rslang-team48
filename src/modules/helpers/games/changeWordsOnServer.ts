/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import { EDifficulty, FALSE, TRUE } from '@constants';
import createUserWord from '@services/users/words/createUserWord';
import getAllUserWords from '@services/users/words/getAllUserWords';
import updateUserWord from '@services/users/words/updateUserWord';
import { temporalWordsData } from '@store';
import { TUserWord } from '@types';
import getDateNow from './getDateNow';

const changeWordsOnServer = async () => {
  const answers = temporalWordsData.gameAnswers;
  const allUserWordsResp = await getAllUserWords();
  const allUserWordsResult: TUserWord[] = await allUserWordsResp.json();
  const promises: Promise<Response>[] = [];

  answers.forEach((item) => {
    const userWord = allUserWordsResult.find((elem) => elem.wordId === item.id);
    if (userWord) {
      let { difficulty, optional }: TUserWord = userWord;

      optional.appeared++;
      optional.updateAt = getDateNow();

      if (difficulty === EDifficulty.UNSET && optional.attempts === 2 && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.correctly++;
        optional.attempts = 0;
      }

      if (difficulty === EDifficulty.UNSET && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.UNSET;
        optional.correctly = 0;
        optional.attempts = 0;
      }

      if (difficulty === EDifficulty.UNSET && item.isCorrectAnswer === FALSE) {
        difficulty = EDifficulty.UNSET;
        optional.attempts = 0;
      }

      if (difficulty === EDifficulty.KNOWN && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.correctly++;
      }

      if (difficulty === EDifficulty.KNOWN && item.isCorrectAnswer === FALSE) {
        difficulty = EDifficulty.UNSET;
      }

      if (difficulty === EDifficulty.HARD && optional.attempts === 4 && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.KNOWN;
        optional.correctly = 0;
        optional.attempts = 0;
      }

      if (difficulty === EDifficulty.HARD && item.isCorrectAnswer === TRUE) {
        difficulty = EDifficulty.HARD;
        optional.correctly++;
        optional.attempts++;
      }

      if (difficulty === EDifficulty.HARD && item.isCorrectAnswer === FALSE) {
        difficulty = EDifficulty.HARD;
        optional.attempts++;
      }

      promises.push(updateUserWord(item.id, difficulty, optional));
    } else {
      const optional = {
        updateAt: getDateNow(),
        appeared: 1,
        correctly: item.isCorrectAnswer === TRUE ? 1 : 0,
        attempts: item.isCorrectAnswer === TRUE ? 1 : 0,
      };

      promises.push(createUserWord(item.id, EDifficulty.UNSET, optional));
    }
  });
  Promise.all(promises);
};

export default changeWordsOnServer;
