import './style.scss';

const renderStartGame = (title: string, description: string, flag: boolean) => `
  <section class="container section">
    <div class="game__layout">
      <div class="game__sprint game__audiocall">
        <div class="game__title">${title}</div>
        <div class="game__description">
          ${description}
        </div>
        ${flag ? `<div class="game__level-buttons">
          <button class="game__level-button active-level-btn" data-group="0">A1</button>
          <button class="game__level-button" data-group="1">A2</button>
          <button class="game__level-button" data-group="2">B1</button>
          <button class="game__level-button" data-group="3">B2</button>
          <button class="game__level-button" data-group="4">C1</button>
          <button class="game__level-button" data-group="5">C2</button>
        </div>` : ''}
        <button class="game__play-button">Начать игру</button>
      </div>
    </div>      
  </section>
`;

export default renderStartGame;
