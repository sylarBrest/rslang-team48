import { HOST } from '@modules/constants';
import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';

const playAudio = () => {
  const word = String((<HTMLElement>document.querySelector('.game__audiocall-word'))?.textContent);
  const { dictionary } = temporalSprintWordsData;

  new Audio(`${HOST}/${dictionary[word].audio}`).play();
};

export default playAudio;
