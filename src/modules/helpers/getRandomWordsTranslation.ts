import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';
import getRandomInteger from '../utils/getRandomInteger';

const getRandomWordsTranslation = () => {
  const { translationOptions } = temporalSprintWordsData;
  const index = getRandomInteger(0, translationOptions.length);
  const {
    word, wordTranslateOne, wordTranslateTwo, wordTranslateThree,
    wordTranslateFour, wordTranslateFive,
  } = translationOptions[index];

  temporalSprintWordsData.translationOptions = translationOptions.filter((_, idx) => idx !== index);

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
