// Setting the correct number 
const correctNumber = 3;
// Prompt the user for their first guess
let guess = Number(prompt("Guess a number between 1 and 10:"));
// Keep asking until the user guesses the correct number
while (guess !== correctNumber) {
    if (guess < correctNumber) {
        console.log("Too low!");
    } else if (guess > correctNumber) {
        console.log("Too high!");
    }
    // Prompt again for a new guess
    guess = Number(prompt("Guess a number between 1 and 10:"));
}
// When the guess is correct, log the success message
console.log("Correct!");
