import { HOST, URL_WORDS } from '../constants';

export const getWords = async (group?: string, page?: string) => {  
  const searchParams = new URLSearchParams({
    group: group || '',
    page: page || '',
  });

  const response = await fetch(`${HOST}${URL_WORDS}?${searchParams}`);

  return response;
};