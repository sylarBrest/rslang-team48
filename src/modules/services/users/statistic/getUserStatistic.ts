import { EUrl } from '@constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(EUrl.STATISTICS);

export default getUserStatistic;
