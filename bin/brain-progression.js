#!/usr/bin/env node

import readlineSync from "readline-sync";
import getGameData, { description } from "../src/games/progression.js";

console.log('Welcome to the Brain Games!');
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!/n${description}`)

for (let i = 0; i < 3; i++) {
    const [question, correctAnswer] = getGameData();
    console.log(`Qustion = ${question}`)
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer} Let's try again, ${name}!`);
    }
    console.log('Correct')
}
console.log(`Congratulations, ${name}!`)





