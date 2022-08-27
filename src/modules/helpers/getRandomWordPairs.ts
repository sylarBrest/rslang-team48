import { temporalWordsData } from '@store/temporalData/temporalWordsData';
import getRandomInteger from '../utils/getRandomInteger';

const getRandomWordPairs = () => {
  const { wordPairs } = temporalWordsData;
  const index = getRandomInteger(0, wordPairs.length);
  const { word, wordTranslate } = wordPairs[index];

  temporalWordsData.wordPairs = wordPairs.filter((_, idx) => idx !== index);

  return {
    word,
    wordTranslate,
  };
};

export default getRandomWordPairs;
