import { HOST } from '@modules/constants';
import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';

const clickPlayAudioHandler = () => {
  const playAudioButton = <HTMLElement>document.querySelector('.game__audiocall-audio');

  playAudioButton.addEventListener('click', () => {
    const word = String(playAudioButton.nextElementSibling?.textContent);

    const { audio } = temporalSprintWordsData.dictionary[word];

    new Audio(`${HOST}/${audio}`).play();
  });
};

export default clickPlayAudioHandler;
