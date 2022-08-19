import { URL_TOKENS } from '../constants';
import basicGetMethod from '../basicMethods/basicGetMethod';

const getNewUserToken = async () => basicGetMethod(URL_TOKENS);

export default getNewUserToken;
