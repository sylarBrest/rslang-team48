import { temporalWordsData } from '@store';
import { getRandomInteger } from '@utils';
import { TTemporalWordsData } from '@types';

const getRandomWordsTranslation = () => {
  const { translationOptions } = <TTemporalWordsData>temporalWordsData;
  const index = getRandomInteger(0, translationOptions.length);
  const {
    word, wordTranslateOne, wordTranslateTwo, wordTranslateThree, wordTranslateFour, wordTranslateFive,
  } = translationOptions[index];

  temporalWordsData.translationOptions = translationOptions.filter((_, idx) => idx !== index);

  return {
    word,
    wordTranslateOne,
    wordTranslateTwo,
    wordTranslateThree,
    wordTranslateFour,
    wordTranslateFive,
  };
};

export default getRandomWordsTranslation;
