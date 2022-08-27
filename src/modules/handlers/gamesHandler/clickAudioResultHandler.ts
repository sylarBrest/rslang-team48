import { HOST } from '@constants';
import { temporalWordsData } from '@store';

const clickAudioResultHandler = () => {
  const tableBody = <HTMLTableElement>document.querySelector('table');

  tableBody.addEventListener('click', (e: Event) => {
    const target = <HTMLElement>e.target;
    const tdElement = target.getAttribute('data-audio');

    if (target && tdElement === 'audio') {
      const word = String(target.nextElementSibling?.textContent);
      const audioPath = temporalWordsData.dictionary[word].audio;

      new Audio(`${HOST}/${audioPath}`).play();
    }
  });
};

export default clickAudioResultHandler;
