const sprintPlayAgainHandler = () => {
  const playAgain = <HTMLButtonElement>document.querySelector('.game__result-again');

  playAgain.addEventListener('click', () => {
    document.location.reload();
  });
};

export default sprintPlayAgainHandler;
