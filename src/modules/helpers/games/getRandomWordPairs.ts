import { temporalWordsData } from '@store';
import { getRandomInteger } from '@utils';

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
