import { EUrl } from '@constants';
import basicGetMethod from '@services/basicMethods/basicGetMethod';

const getUserSettings = async () => basicGetMethod(EUrl.SETTINGS);

export default getUserSettings;
