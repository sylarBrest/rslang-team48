/* eslint-disable no-plusplus */

const cardClickAudioHandler = () => {
  const audioIcons = document.querySelectorAll<HTMLElement>('.card__audio-btn');

  audioIcons.forEach((elem) => {
    elem.addEventListener('click', (e: Event) => {
      document.querySelectorAll('audio').forEach((el) => {
        const audio = el;
        audio.pause();
        audio.currentTime = 0;
      });

      audioIcons.forEach((el) => el.removeAttribute('disabled'));

      const target = <HTMLButtonElement>e.target;
      const audio = <HTMLAudioElement>target.querySelector('audio');
      const playList = <string[]>target.getAttribute('data-audio-files')?.split(',');

      let current = 0;

      audio.src = playList[current];
      audio.play();

      audio.onended = () => {
        current++;

        if (current < playList.length) {
          audio.src = playList[current];
          audio.play();
        }
      };
    });
  });
};

export default cardClickAudioHandler;
