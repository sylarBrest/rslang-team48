import { URL_WORDS } from '../../constants';
import basicGetMethodWithWordId from '../../basicMethods/basicGetMethodWithWordId';

const getUserWord = async (wordId: string) => basicGetMethodWithWordId(wordId, URL_WORDS);

export default getUserWord;
