import { URL_STATISTICS } from '@services/constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(URL_STATISTICS);

export default getUserStatistic;
