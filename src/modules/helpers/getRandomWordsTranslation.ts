import { temporalWordsData } from '@modules/store/temporalData/temporalWordsData';
import getRandomInteger from '../utils/getRandomInteger';

const getRandomWordsTranslation = () => {
  const { translationOptions } = temporalWordsData;
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
