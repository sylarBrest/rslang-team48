import { EUrl } from '@constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getUserStatistic = async () => basicGetMethod(EUrl.SETTINGS);

export default getUserStatistic;
