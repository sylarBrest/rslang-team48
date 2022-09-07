const fillBg = () => {
  const textbook = <HTMLBodyElement>document.querySelector('.textbook');
  if (textbook) {
    const cards = [...document.querySelectorAll<HTMLElement>('.card')];
    const isAllLearned = cards.every((el) => el.dataset.difficulty?.toLocaleLowerCase() === 'known');
    if (isAllLearned) textbook.style.backgroundColor = 'var(--color-green-100)';
    else textbook.style.backgroundColor = 'var(--color-white-100)';
  }
};

export default fillBg;
