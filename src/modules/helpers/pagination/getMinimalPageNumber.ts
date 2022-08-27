const getMinimalPageNumber = () => {
  const firstButton = <HTMLButtonElement>document.querySelector('.page');
  return firstButton.dataset.page;
};

export default getMinimalPageNumber;
