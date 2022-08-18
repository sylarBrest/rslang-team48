import { HOST, URL_WORDS } from '../constants';

export const getWordById = async (id: string) => {
  return await fetch(`${HOST}${URL_WORDS}/${id}`);
};
