import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import { TAggregatedWord } from '@types';

const getNewWords = async () => {
  const response = await getAllAggregatedWords(
    '{"userWord.optional.isNew":true}',
  );

  const data: TAggregatedWord[] = await response.json();

  const results = data[0].paginatedResults;
  const { count } = data[0].totalCount[0];

  return { results, count };
};

export default getNewWords;
