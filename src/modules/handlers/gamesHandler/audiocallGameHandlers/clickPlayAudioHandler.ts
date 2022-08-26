import { HOST } from '@modules/constants';
import { temporalWordsData } from '@modules/store/temporalData/temporalWordsData';

const clickPlayAudioHandler = () => {
  const playAudioButton = <HTMLElement>document.querySelector('.game__audiocall-audio');

  playAudioButton.addEventListener('click', () => {
    const word = String(playAudioButton.nextElementSibling?.textContent);

    const { audio } = temporalWordsData.dictionary[word];

    new Audio(`${HOST}/${audio}`).play();
  });
};

export default clickPlayAudioHandler;
