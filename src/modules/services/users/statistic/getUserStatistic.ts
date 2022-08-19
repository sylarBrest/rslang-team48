import { URL_STATISTICS } from '../../constants';
import basicGetMethod from '../../basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(URL_STATISTICS);

export default getUserStatistic;
