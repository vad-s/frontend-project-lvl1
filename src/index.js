import readlineSync from 'readline-sync';

const attemptsCount = 3;
const engine = (gameCondition, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);

  for (let i = 1; i <= attemptsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
