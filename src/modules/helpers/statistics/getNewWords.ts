import { ALL_WORDS_ON_SERVER } from '@constants';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import { TAggregatedWord } from 'modules/types/aggregated';

const getNewWords = async () => {
  const response = await getAllAggregatedWords(
    ALL_WORDS_ON_SERVER,
    '{"userWord.optional.isNew":true}',
  );

  const data: TAggregatedWord[] = await response.json();

  const results = data[0].paginatedResults;
  const { count } = data[0].totalCount[0] || { count: 0 };

  return { results, count };
};

export default getNewWords;
