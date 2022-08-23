const getRandomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max - min);

  return Math.floor(rand);
};

export default getRandomInteger;
