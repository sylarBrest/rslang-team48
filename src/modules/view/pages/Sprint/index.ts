import './style.scss';

const renderSprintGame = (word: string, wordTranslate: string) => `  
  <div class="sprint__play">
    <div class="sprint__play-timer">30</div>
    <div class="sprint__play-word">${word}</div>
    <div class="sprint__play-word-translate">${wordTranslate}</div>
    <div class="sprint__play-buttons">
      <button data-boolean="false" class="sprint__play-false">не верно</button>
      <button data-boolean="true" class="sprint__play-true">верно</button>
    </div>
  </div>
`;

export default renderSprintGame;
