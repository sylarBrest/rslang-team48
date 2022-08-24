/* eslint-disable no-underscore-dangle */
import { TTemporalSprintWordsData, TWordContent } from '@types';
import { getRandomInteger } from '@utils';

export const temporalSprintWordsData: TTemporalSprintWordsData = {
  dictionary: {},
  wordPairs: [],
  gameAnswers: [],
};

export const initTemporalSprintWordsData = (array: TWordContent[]) => {
  const tempArr = array.map((elem) => [elem.word, { wordTranslate: elem.wordTranslate, id: elem.id }]);

  temporalSprintWordsData.dictionary = Object.fromEntries(tempArr);

  temporalSprintWordsData.wordPairs = array.map((elem, idx, arr) => {
    const flag = Math.random() < 0.6;

    let index = getRandomInteger(0, arr.length);

    while (index === idx) {
      index = getRandomInteger(0, arr.length);
    }

    return {
      word: elem.word,
      wordTranslate: flag ? elem.wordTranslate : arr[index].wordTranslate,
    };
  });
};
