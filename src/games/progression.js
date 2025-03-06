import getRandomNumber from "../utils";

const getProgression = (length, start, step) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + 1 * step);
    }
    return progression
};

const getGameData = () => {
    const length = getRandomNumber(5, 10);
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(2, 5);
    const progression = getProgression(length, start, step);

    const heddenIndex = getRandomNumber(0, length -1);
    const correctAnswer = String(progression[heddenIndex]);
    progression[heddenIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer]
}
export const description = 'What number is missing in the progression?'
export default getGameData