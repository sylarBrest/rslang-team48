import { EUrl } from '@constants';
import basicGetMethodWithWordId from '@services/basicMethods/basicGetMethodWithWordId';

const getAggregatedWord = async (wordId: string) => basicGetMethodWithWordId(wordId, EUrl.AGGREGATED);

export default getAggregatedWord;
