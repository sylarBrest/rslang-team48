import { EUrl } from '@constants';
import basicGetMethodWithWordId from '@services/basicMethods/basicGetMethodWithWordId';

const getUserWord = async (wordId: string) => basicGetMethodWithWordId(wordId, EUrl.WORDS);

export default getUserWord;
