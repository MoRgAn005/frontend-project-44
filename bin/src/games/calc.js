import getRandomNumber from '../utils.js';

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
};

const operators = ['+', '-', '*'];

const getGameData = () => {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operator));
    return [question, correctAnswer];
};

export const description = 'What is the result of the expression?';
export default getGameData;