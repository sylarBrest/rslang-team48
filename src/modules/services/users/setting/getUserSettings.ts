import { URL_SETTINGS } from '@services/constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(URL_SETTINGS);

export default getUserStatistic;
