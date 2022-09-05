import { EUrl } from '@constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getAllUserWords = async () => basicGetMethod(EUrl.WORDS);

export default getAllUserWords;
