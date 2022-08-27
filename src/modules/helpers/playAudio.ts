import { HOST } from '@constants';
import { temporalWordsData } from '@store';

const playAudio = () => {
  const word = String((<HTMLElement>document.querySelector('.game__audiocall-word'))?.textContent);
  const { dictionary } = temporalWordsData;

  new Audio(`${HOST}/${dictionary[word].audio}`).play();
};

export default playAudio;
