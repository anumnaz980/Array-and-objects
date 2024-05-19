//          OBJECT ASSIGNMENT:
// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like name (string), department (string),
// and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if any).
type Employee={
    name:string;
    department:string;
    role:"Manager"| "Engineer" | "Intern";
    contact?:{
        phNo?:number;
        email?:string;
    };
    skills?:string[];
}
const employee1:Employee={
    name:"Anum Naz",
    department:"Information Technology(IT)",
    role:"Manager",
    contact:{
        phNo:3123456789,
        email:"anum@gmail.com",
    }, 
    skills:["Typescript","Python","C++"]
}

const employee2:Employee={
    name:"Muhammad",
    department:"Software Engineering",
    role:"Engineer",
    contact:{
        phNo:3123456789,
    }, 
    skills:["Programming Languages","Database Management","Testing and Debugging","cloud computing"]
}
const employee3:Employee={
    name:"Yahya",
    department:"Internship Programs",
    role:"Intern",
    contact:{
        email:"yahya@gmail.com",
    }, 
 }
console.log(employee1);
console.log(employee2);
console.log(employee3);

// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the engine's horsepower.

type Car= {
    brandName:string;
    model:string;
    year:number;
    color:string;
    engine:{
        horsepower:number;
    };
     getHorsePower:()=> number
}
let car:Car = {
    brandName:"BMW",
    model:"BMW X5",
    year:2023,
    color:"Black",
    engine:{
        horsepower:520,
    },
    getHorsePower(){
        return this.engine.horsepower
    },
}
console.log(car);
console.log(car.getHorsePower());

//Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name(string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue).

type Product = {
    name:string;
    price:number;
    color:string;
    inventory:{
         stock:number;
         colorOptions?:string[];
         changeColor:(newColor:string)=>void
    };
};
const tShirt:Product = {
    name:"Outfit",
    price:2000,
    color:"Black",
    inventory:{
        stock:200,
        colorOptions:["Black","White","Red","Yellow","Blue"],
        changeColor(newColor:string){
           if(this.colorOptions?.includes(newColor)){
                tShirt.color = newColor;
                if(newColor === "Red"){
                    tShirt.price = 2000 * 1.1
                }else if (newColor === "Blue"){
                    tShirt.price = 2000 * 0.95
                }else{
                 tShirt.price = 2000
                }
            }else{
              console.log(`Color ${newColor} is not available.`)
            }
        } 
    }
};

console.log(tShirt);
console.log(`My initial T-Shirt color is ${tShirt.color} and its price is ${tShirt.price}`)
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
let fruits:string[] = ["apple","banana","mango","orange"];
console.log(fruits);

//Q#2:
//Declare an array named numbers that can contain only number elements and initialize  it with the values 10,20,30 and 40.
let numbers:number[] = [10 , 20 , 30 , 40 ];
console.log(numbers);

//Question 3:
//Access the third element of the fruits array and assign it to variable named thirdFruit.
  let thirdFruit:string = fruits[2];
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
   let lastFruit:string | undefined = fruits.pop();
   console.log(lastFruit);
   console.log(fruits);

//  Question 7:
//  Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
    let firstFruit:string | undefined= fruits.shift();
    console.log(fruits);
    console.log(firstFruit);

//   Question 8
//   Add the element "kiwi" to the beginning of the fruits array using the method.
     fruits.unshift("kiwi");
     console.log(fruits);
    
//    Question 9
//    Remove 2 elements from the fruits array starting from index 1 using the method.
      fruits.splice(1,2);
      console.log(fruits);

//    Question 10
//    Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
      fruits.splice(2,0,"pineapple","pear");
      console.log(fruits);

//    Question 11
//    Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
      let citrusFruits:string[] = fruits.slice(0,2);
      console.log(citrusFruits);

//    Question 12
//    Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
     let lastTwoFriuts:string[] = fruits.slice(-2);
    console.log(lastTwoFriuts);




