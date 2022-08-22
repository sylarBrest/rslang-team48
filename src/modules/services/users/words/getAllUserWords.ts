import { URL_WORDS } from '../../constants';
import basicGetMethod from '../../basicMethods/basicGetMethod';

const getAllUserWords = async () => basicGetMethod(URL_WORDS);

export default getAllUserWords;
