import { wordsDataLocal } from '../../store/wordsData/initWordsData';
import { HOST, URL_WORDS } from '../constants';

const getWords = async (group: string = wordsDataLocal.group, page: string = wordsDataLocal.page) => {
  const searchParams = new URLSearchParams({
    group,
    page,
  });

  const response = await fetch(`${HOST}${URL_WORDS}?${searchParams}`);

  return response;
};

export default getWords;
