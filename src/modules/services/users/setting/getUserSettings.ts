import { URL_SETTINGS } from '../../constants';
import basicGetMethod from '../../basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(URL_SETTINGS);

export default getUserStatistic;
