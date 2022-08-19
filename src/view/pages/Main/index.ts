type Props = {
  target: HTMLElement,
};

function Main({ target }: Props) {
  const mainContainer = document.createElement('section');
  mainContainer.classList.add('container', 'section');
  mainContainer.innerHTML = `
    <h2>Главная</h2>
    <div class="tutorial__header">
      <div class="tutorial__toolbar"></div>
    </div>
    <div class="tutorial__body">
      <div class="words"></div>
    </div>
    <div class="tutorial__footer">
    </div>
  `;

  target.appendChild(mainContainer);
}

export default Main;
