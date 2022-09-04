
import { getRandomInteger, shuffleArray } from '@utils';
import { TTemporalWordsData, TWordContent } from 'modules/types/words';

export const temporalWordsData: TTemporalWordsData = {
  dictionary: {},
  wordPairs: [],
  translationOptions: [],
  gameAnswers: [],
  game: '',
};

export const initTemporalWordsData = (array: TWordContent[]) => {
  const tempArr = array.map((elem) => [
    elem.word,
    {
      wordTranslate: elem.wordTranslate,
      // eslint-disable-next-line no-underscore-dangle
      id: elem.id || elem._id,
      audio: elem.audio,
      image: elem.image,
    },
  ]);

  temporalWordsData.dictionary = Object.fromEntries(tempArr);

  temporalWordsData.wordPairs = array.map((elem, idx, arr) => {
    const flag = Math.random() < 0.6;

    let index = getRandomInteger(0, arr.length);

    while (index === idx && !flag) {
      index = getRandomInteger(0, arr.length);
    }

    return {
      word: elem.word,
      wordTranslate: flag ? elem.wordTranslate : arr[index].wordTranslate,
    };
  });

  temporalWordsData.translationOptions = array.map((elem, idx, arr) => {
    const translationArray = [elem.wordTranslate];

    for (let i = 0; i < 4; i += 1) {
      let index = getRandomInteger(0, arr.length);

      while (index === idx || translationArray.includes(arr[index].wordTranslate)) {
        index = getRandomInteger(0, arr.length);
      }

      translationArray.push(arr[index].wordTranslate);
    }

    const mixArray = shuffleArray(translationArray);

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
