// Prompt the user to input their score
let score = prompt("Please enter your score:");
score = Number(score);
// Determining the grade based on the score
if (score >= 90) {
    console.log("Your grade is excellent.");
} else if (score >= 80 && score <= 89) {
    console.log("Your grade is good.");
} else if (score >= 70 && score <= 79) {
    console.log("Your grade is fair.");
} else {
    console.log("Needs improvement.");
}
