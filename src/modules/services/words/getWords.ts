import { wordsDataLocal } from '@store';
import { HOST, EUrl } from '@constants';

const getWords = async (group: string = wordsDataLocal.group, page: string = wordsDataLocal.page) => {
  const searchParams = new URLSearchParams({
    group,
    page,
  });

  const response = await fetch(`${HOST}${EUrl.WORDS}?${searchParams}`);

  return response;
};

export default getWords;
