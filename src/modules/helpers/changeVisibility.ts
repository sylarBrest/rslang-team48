const changeVisibility = (visibility: string) => {
  const nextButton = <HTMLButtonElement>document.querySelector('.game__audiocall-next-button');
  const img = <HTMLImageElement>document.querySelector('.game__audiocall-img');
  const wordElement = <HTMLElement>document.querySelector('.game__audiocall-word');

  img.style.visibility = visibility;
  wordElement.style.visibility = visibility;
  nextButton.style.visibility = visibility;
};

export default changeVisibility;
