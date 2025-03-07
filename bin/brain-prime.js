#!/usr/bin/env node
import readlineSync from "readline-sync";

const isEven = (n) =>
  n > 1 && [...Array(n - 1).keys()].slice(2).every((i) => n % (i + 2));
const startGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const answer = readlineSync
      .question(`Question: ${number}\nYour answer:`)
      .toLowerCase();
    const correctAnswer = isEven(number) ? "yes" : "no";
    console.log(answer === correctAnswer ? 'Correct!' : `Wrong! Correct answer was '${correctAnswer}'.`);
    console.log(`Congratulations, ${name}!`);
  }
};
startGame();