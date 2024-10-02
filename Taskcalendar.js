// Defining tasks for each day
const tasks = {
    monday: "Your test for Monday is finished.",
    tuesday: "Your test for Tuesday is finished.",
    wednesday: "Your test for Wednesday is finished.",
    thursday: "Your test for Thursday is finished.",
    friday: "Your test for Friday is finished.",
    saturday: "Your test for Saturday is finished.",
    sunday: "Your test for Sunday is finished."
};
// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week:").toLowerCase();
// Checking if the entered day exists in the tasks object
if (tasks[day]) {
    console.log(tasks[day]);
} else {
    console.log("Invalid day. Please enter a valid day.");
}
