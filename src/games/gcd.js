import getRandomNumber from '../utils.js';

const calculateGCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const getGameData = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(calculateGCD(num1, num2));
    return [question, correctAnswer];
};

export const description = 'Find the greatest common divisor of given numbers.';
export default getGameData;