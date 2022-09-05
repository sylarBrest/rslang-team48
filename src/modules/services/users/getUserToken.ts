import { EUrl } from '@constants';
import basicGetMethod from '../basicMethods/basicGetMethod';

const getNewUserToken = async () => basicGetMethod(EUrl.TOKENS);

export default getNewUserToken;
