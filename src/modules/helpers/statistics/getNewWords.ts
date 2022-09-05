import { ALL_WORDS_ON_SERVER, ZERO } from '@constants';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import { TAggregatedWord } from '@types';

const getNewWords = async () => {
  const queries = {
    group: ZERO,
    page: ZERO,
    wordsPerPage: ALL_WORDS_ON_SERVER,
    filter: '{"userWord.optional.isNew":true}',
  };
  const response = await getAllAggregatedWords(queries, true);

  const data: TAggregatedWord[] = await response.json();

  console.log(data);
  const results = data[0].paginatedResults;
  const { count } = data[0].totalCount[0] || { count: 0 };

  return { results, count };
};

export default getNewWords;
