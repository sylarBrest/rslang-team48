import { temporalSprintWordsData } from '@store';
import getRandomInteger from './getRandomInteger';

const getRandomWordPairs = () => {
  const { wordPairs } = temporalSprintWordsData;
  const index = getRandomInteger(0, wordPairs.length);
  const { word, wordTranslate } = wordPairs[index];

  temporalSprintWordsData.wordPairs = wordPairs.filter((_, idx) => idx !== index);

  return {
    word,
    wordTranslate,
  };
};

export default getRandomWordPairs;
