import { temporalWordsData } from '@store';
import { getRandomInteger } from '@utils';
import { TTemporalWordsData } from 'modules/types/words';

const getRandomWordPairs = () => {
  const { wordPairs } = <TTemporalWordsData>temporalWordsData;
  const index = getRandomInteger(0, wordPairs.length);
  const { word, wordTranslate } = wordPairs[index];

  temporalWordsData.wordPairs = wordPairs.filter((_, idx) => idx !== index);

  return {
    word,
    wordTranslate,
  };
};

export default getRandomWordPairs;
