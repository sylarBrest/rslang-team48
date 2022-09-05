import getUserStatistic from '@services/users/statistic/getUserStatistic';
import { TUserStat } from '@types';
import updateWordsData from './updateWordsData';

const setWordsData = async () => {
  const response = await getUserStatistic();
  const { optional }: TUserStat = await response.json();
  updateWordsData(optional.textbook.group, optional.textbook.page);
};

export default setWordsData;
