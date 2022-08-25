/* eslint-disable no-plusplus */
import shuffle from '@modules/utils/shuffle';
import { TTemporalSprintWordsData, TWordContent } from '@types';
import { getRandomInteger } from '@utils';

export const temporalSprintWordsData: TTemporalSprintWordsData = {
  dictionary: {},
  wordPairs: [],
  translationOptions: [],
  gameAnswers: [],
};

export const initTemporalSprintWordsData = (array: TWordContent[]) => {
  const tempArr = array.map((elem) => [
    elem.word,
    {
      wordTranslate: elem.wordTranslate,
      id: elem.id,
      audio: elem.audio,
      image: elem.image,
    },
  ]);

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

  temporalSprintWordsData.translationOptions = array.map((elem, idx, arr) => {
    const translationArray = [elem.wordTranslate];

    for (let i = 0; i < 4; i++) {
      let index = getRandomInteger(0, arr.length);

      while (index === idx || translationArray.includes(arr[index].wordTranslate)) {
        index = getRandomInteger(0, arr.length);
      }

      translationArray.push(arr[index].wordTranslate);
    }

    const mixArray = shuffle(translationArray);

    return {
      word: elem.word,
      wordTranslateOne: mixArray[0],
      wordTranslateTwo: mixArray[1],
      wordTranslateThree: mixArray[2],
      wordTranslateFour: mixArray[3],
      wordTranslateFive: mixArray[4],
    };
  });
};
