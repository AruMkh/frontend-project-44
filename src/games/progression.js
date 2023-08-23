import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const createRandomProgression = (firstElement, step) => {
  const progression = [];
  for (let i = firstElement; progression.length <= progressionLength; i += step) {
    progression.push(i);
  }
  return progression;
};

const getDataForRound = () => {
  const firstElement = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const randomProgression = createRandomProgression(firstElement, step);
  const numberForAnswer = randomProgression.splice(getRandomNumber(1, 10), 1, '..');
  const answer = String(numberForAnswer);
  const progression = randomProgression.join(' ');
  return [progression, answer];
};

export default () => runGame(rules, getDataForRound);
