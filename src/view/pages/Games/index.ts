type Props = {
  target: HTMLElement,
};

function Games({ target }: Props) {
  const gamesContainer = document.createElement('section');
  gamesContainer.classList.add('container', 'section');
  gamesContainer.innerHTML = `
    <h2>Игры</h2>
    <div class="games__header">
      <div class="games__toolbar"></div>
    </div>
    <div class="games__body">
      <div class="words"></div>
    </div>
    <div class="games__footer">
    </div>
  `;

  target.appendChild(gamesContainer);
}

export default Games;
