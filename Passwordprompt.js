// Settinh the correct password
const correctPassword = "I LOVE ISPSC ";
// Variable to store the user's input
let userPassword;
// Using a do-while loop to keep asking for the password
do {
    userPassword = prompt("Enter your password:");
    if (userPassword !== correctPassword) {
        console.log("Wrong password. Try again.");
    }
} while (userPassword !== correctPassword);
// Log a success message when the correct password is entered
console.log("Correct password. Access complete.");
