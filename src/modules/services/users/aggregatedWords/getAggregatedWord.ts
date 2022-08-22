import { URL_AGGREGATED } from '../../constants';
import basicGetMethodWithWordId from '../../basicMethods/basicGetMethodWithWordId';

const getAggregatedWord = async (wordId: string) => basicGetMethodWithWordId(wordId, URL_AGGREGATED);

export default getAggregatedWord;
