import { HOST, URL_WORDS } from '../constants';

const getWordById = async (id: string) => fetch(`${HOST}${URL_WORDS}/${id}`);

export default getWordById;
