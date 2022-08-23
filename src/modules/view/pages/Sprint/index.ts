import getRandomWordPairs from '@modules/utils/getRandomWordPairs';
import './style.scss';

const renderSprintGame = () => {
  const { word, wordTranslate } = getRandomWordPairs();
  return ` 
    <div class="game__sprint">
      <div class="game__sprint-timer">30</div>
      <div class="game__sprint-words">
        <div class="game__sprint-word">${word}</div>
        <div class="game__sprint-word-translate">${wordTranslate}</div>
      </div>        
      <div class="game__sprint-buttons">
        <button data-boolean="false" class="game__sprint-logic-button sprint__play-false">не верно</button>
        <button data-boolean="true" class="game__sprint-logic-button sprint__play-true">верно</button>
      </div>
    </div> 
`;
};

export default renderSprintGame;
