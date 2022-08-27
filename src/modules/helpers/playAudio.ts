import { HOST } from '@modules/constants';
import { temporalWordsData } from '@modules/store/temporalData/temporalWordsData';

const playAudio = () => {
  const word = String((<HTMLElement>document.querySelector('.game__audiocall-word'))?.textContent);
  const { dictionary } = temporalWordsData;

  new Audio(`${HOST}/${dictionary[word].audio}`).play();
};

export default playAudio;
