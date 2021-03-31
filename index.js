/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
let array = [1,2,3,4,5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let person = {
    name: "John",
    surname: "Doe",
    email: "JohnDoe123@example.com",
    age: 20
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent whether you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */
person.drivinglicense = false

/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */
delete person.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
let secondPerson = {
    name: "Yahya",
    surname: "Doe",
    email: "YahyaDoe123@example.com",
}

console.log("The email is equal to the previous one: ", person.email !== secondPerson.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 100
if (totalShoppingCart <= 50)
    totalShoppingCart += 10// totalShoppingCart = totalShoppingCart + 10

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 100

if (totalShoppingCart <= 50)
    totalShoppingCart += 10// totalShoppingCart = totalShoppingCart + 10

let discount = totalShoppingCart * 0.2
totalShoppingCart = totalShoppingCart = discount

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */
let car1 = { brand: "Toyota", model: "Yaris", licensePlate: "WEDH8WN"}
let car2 = {
    ...car1,
    licensePlate: "IUHNED98"
}

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
let carsForRent = { car1, car2}

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.pop()
carsForRent.shift()

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */
console.log(car.brand, car.model, car.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */
let carsForSale = [car1, car2]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length,
}

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */
console.log(carsForSale[0].licensePlate)
console.log(carsForSale[1].licensePlate)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/