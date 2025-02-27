import readlineSync from 'readline-sync'

const greetUser = () => {
const name = readlineSync.question('May I have your name? John')
console.log(`Hello, john!`)
}
export default greetUser