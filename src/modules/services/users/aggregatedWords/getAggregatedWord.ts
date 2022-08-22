import { URL_AGGREGATED } from '@services/constants';
import basicGetMethodWithWordId from '@services/basicMethods/basicGetMethodWithWordId';

const getAggregatedWord = async (wordId: string) => basicGetMethodWithWordId(wordId, URL_AGGREGATED);

export default getAggregatedWord;
