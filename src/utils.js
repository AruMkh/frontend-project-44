const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
export default getRandomNumber;
