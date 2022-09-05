import { ALL_WORDS_ON_SERVER, ZERO } from '@constants';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import { TAggregatedWord } from '@types';

const getKnownWords = async () => {
  const queries = {
    group: ZERO,
    page: ZERO,
    wordsPerPage: ALL_WORDS_ON_SERVER,
    filter: '{"userWord.difficulty":"known"}',
  };
  const response = await getAllAggregatedWords(queries);

  const data: TAggregatedWord[] = await response.json();

  const results = data[0].paginatedResults;
  const { count } = data[0].totalCount[0] || { count: 0 };

  return { results, count };
};

export default getKnownWords;
