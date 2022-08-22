import { URL_WORDS } from '@services/constants';
import basicGetMethodWithWordId from '@services/basicMethods/basicGetMethodWithWordId';

const getUserWord = async (wordId: string) => basicGetMethodWithWordId(wordId, URL_WORDS);

export default getUserWord;
