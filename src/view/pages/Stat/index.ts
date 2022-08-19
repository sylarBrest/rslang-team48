type Props = {
  target: HTMLElement,
};

function Stat({ target }: Props) {
  const statContainer = document.createElement('section');
  statContainer.classList.add('container', 'section');
  statContainer.innerHTML = `
    <h2>Статистика</h2>
    <div class="stat__header">
      <div class="stat__toolbar"></div>
    </div>
    <div class="stat__body">
      <div class="words"></div>
    </div>
    <div class="stat__footer">
    </div>
  `;

  target.appendChild(statContainer);
}

export default Stat;
