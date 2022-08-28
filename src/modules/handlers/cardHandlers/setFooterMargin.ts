const setFooterMargin = () => {
  const footer = document.querySelector<HTMLElement>('.textbook__footer');
  const cardWidth = document.querySelector<HTMLElement>('.card')?.offsetWidth || 1;
  const containerWidth = document.querySelector<HTMLElement>('.textbook')?.offsetWidth || 1;
  const bottomCardsCount = Math.floor(containerWidth / cardWidth);
  const maxHeight = Math.max(
    ...[...document.querySelectorAll<HTMLElement>('.card__body')]
      .slice(-bottomCardsCount)
      .map((el) => el.offsetHeight),
  );
  if (footer) footer.style.marginTop = `${maxHeight}px`;
};

export default setFooterMargin;
