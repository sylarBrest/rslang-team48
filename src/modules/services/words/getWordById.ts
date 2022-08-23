import { HOST, EUrl } from '@constants';

const getWordById = async (id: string) => fetch(`${HOST}${EUrl.WORDS}/${id}`);

export default getWordById;
