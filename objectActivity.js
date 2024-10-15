// Create an object called car with properties type, model, and color
let car = {
    type: "SUV",
    model: "Xpander",
    color: "White"
};
// Use typeof to check the type of the object and log it to the console
console.log("Type of 'car':", typeof car); // Logs "object"
// Update the type property to "Mitsubishi" and log the updated object
car.type = "Mitsubishi";
console.log("Updated car object:", car); // Logs { type: "Mitsubishi", model: "Xpander", color: "White" }
// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log("Car object after adding wheels:", car); // Logs { type: "Mitsubishi", model: "Xpander", color: "white", wheels: 4 }
