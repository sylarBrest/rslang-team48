import { FALSE, TRUE } from '@modules/constants/common';
import { TTemporalSprintWordsData, TWordContent } from '@modules/types';
import getRandomInteger from '@modules/utils/getRandomInteger';

export const temporalSprintWordsData: TTemporalSprintWordsData = {
  sprintWordPairs: [],
  sprintGameAnswers: [],
};

export const initTemporalSprintWordsData = (array: TWordContent[]) => {
  temporalSprintWordsData.sprintWordPairs = array.map((elem, idx, arr) => {
    const flag = Math.random() < 0.6;

    let index = getRandomInteger(0, arr.length);

    while (index === idx) {
      index = getRandomInteger(0, arr.length);
    }

    return {
      id: elem.id,
      word: elem.word,
      wordTranslate: flag ? elem.wordTranslate : arr[index].wordTranslate,
      isCorrect: flag ? TRUE : FALSE,
    };
  });
};
