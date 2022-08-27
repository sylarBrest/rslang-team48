import { HOST } from '@constants';
import { temporalWordsData } from '@store';

const clickPlayAudioHandler = () => {
  const playAudioButton = <HTMLElement>document.querySelector('.game__audiocall-audio');

  playAudioButton.addEventListener('click', () => {
    const word = String(playAudioButton.nextElementSibling?.textContent);

    const { audio } = temporalWordsData.dictionary[word];

    new Audio(`${HOST}/${audio}`).play();
  });
};

export default clickPlayAudioHandler;
