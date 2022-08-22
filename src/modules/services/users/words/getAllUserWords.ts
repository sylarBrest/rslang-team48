import { URL_WORDS } from '@services/constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getAllUserWords = async () => basicGetMethod(URL_WORDS);

export default getAllUserWords;
