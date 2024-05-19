"use strict";
const employee1 = {
    name: "Anum Naz",
    department: "Information Technology(IT)",
    role: "Manager",
    contact: {
        phNo: 3123456789,
        email: "anum@gmail.com",
    },
    skills: ["Typescript", "Python", "C++"]
};
const employee2 = {
    name: "Muhammad",
    department: "Software Engineering",
    role: "Engineer",
    contact: {
        phNo: 3123456789,
    },
    skills: ["Programming Languages", "Database Management", "Testing and Debugging", "cloud computing"]
};
const employee3 = {
    name: "Yahya",
    department: "Internship Programs",
    role: "Intern",
    contact: {
        email: "yahya@gmail.com",
    },
};
console.log(employee1);
console.log(employee2);
console.log(employee3);
let car = {
    brandName: "BMW",
    model: "BMW X5",
    year: 2023,
    color: "Black",
    engine: {
        horsepower: 520,
    },
    getHorsePower() {
        return this.engine.horsepower;
    },
};
console.log(car);
console.log(car.getHorsePower());
const tShirt = {
    name: "Outfit",
    price: 2000,
    color: "Black",
    inventory: {
        stock: 200,
        colorOptions: ["Black", "White", "Red", "Yellow", "Blue"],
        changeColor(newColor) {
            var _a;
            if ((_a = this.colorOptions) === null || _a === void 0 ? void 0 : _a.includes(newColor)) {
                tShirt.color = newColor;
                if (newColor === "Red") {
                    tShirt.price = 2000 * 1.1;
                }
                else if (newColor === "Blue") {
                    tShirt.price = 2000 * 0.95;
                }
                else {
                    tShirt.price = 2000;
                }
            }
            else {
                console.log(`Color ${newColor} is not available.`);
            }
        }
    }
};
console.log(tShirt);
console.log(`My initial T-Shirt color is ${tShirt.color} and its price is ${tShirt.price}`);
tShirt.inventory.changeColor("Red");
console.log(`If the T-Shirt is ${tShirt.color} , so the price is ${tShirt.price}.`);
tShirt.inventory.changeColor("Blue");
console.log(`If the T-Shirt is ${tShirt.color} , so the price is ${tShirt.price}.`);
tShirt.inventory.changeColor("Yellow");
console.log(`If the T_Shirt is ${tShirt.color} , so the price is ${tShirt.price}.`);
tShirt.inventory.changeColor("White");
console.log(`If the T_Shirt is ${tShirt.color} , so the price is ${tShirt.price}.`);
tShirt.inventory.changeColor("Green");
//       ASSIGNMENT OF ARRAY :
//Q#1:
//Create an array named fruits that contains the following string elements: "apple","banana","mango","orange"
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//Q#2:
//Declare an array named numbers that can contain only number elements and initialize  it with the values 10,20,30 and 40.
let numbers = [10, 20, 30, 40];
console.log(numbers);
//Question 3:
//Access the third element of the fruits array and assign it to variable named thirdFruit.
let thirdFruit = fruits[2];
console.log(thirdFruit);
// Question 4:
// Change the second element of the numbers array to 25.
numbers[1] = 25;
console.log(numbers);
// Question 5
// Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log(fruits);
// Question 6
// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
//  Question 7:
//  Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);
//   Question 8
//   Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("kiwi");
console.log(fruits);
//    Question 9
//    Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
console.log(fruits);
//    Question 10
//    Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
//    Question 11
//    Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
//    Question 12
//    Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let lastTwoFriuts = fruits.slice(-2);
console.log(lastTwoFriuts);
