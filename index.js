
// Variables - storage containers

// const num = 100; - cannot be changed 
// let num2 = 23; - can be changed.
// var num3 = 59; - old version - rarely used because of the risk.

// const a=15;
// const b=10;

// console.log(a + b);


// let x=15;
// let r;

// r=10;

// console.log(x/r);

// Data Types

//primitive data types - take a single value

// strings
// number
// boolean
// undefined
// null
// NaN

// Arithmetic Operations 
// +
// - 
// /
// *
// **
// %

// = Assignment Operator

// PEMDAS  - Order of Operations 

// Parantheses - ()
// Exponent - **
// Multiplication - *
// Division - /
// Addition - +
// Subtraction - (-)
// Modulo - Remainder (%)

// let a = 520;
// let b = 13;

// console.log(a+b); 
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
//console.log(a%b);



// COMPARISON OPERATORS 

// <
// >
// <=
// >=
// == (loose)
// === (strict)
// != (not strict)

// let a = "home";
// let b = 125;
// let c = true;
// let d = 1526;

// console.log(a === "home"); //true
// console.log(b <= d); // true
// console.log(c != true); // false
// console.log(d == b); // false



// LOGICAL OPERATORS

// AND - && - Both conditions have to be TRUE

// let isSunny = true;
// let hasUmbrella = true;


// if(isSunny && hasUmbrella) {  
//     console.log("Its raining.")
// };


// OR - || - Either side has to be true

// let hasMoney = false;
// let hasCard = true;

// if(hasMoney || hasCard) {   // true
//     console.log("You can buy lunch!")
// };


// NOT ! - Flips the original condition. 
// let a = true; = false
// let b = false; = true

// let isRainy = false; // true 

// if(!isRainy) {
//     console.log("Let's go outside.")
// };



// CONDITIONAL - if, else if, else

// if - the first condition. Executes code if true.
// else if - second condition. Executes code when 'if condition' is false.
// else - third and last condition. Executes code when 'if and 'else if' are both false.

// let weather = "humid";

// // conditions

// if(weather === "rainy") {
//     console.log("Take an umbrella.");
// } else if(weather === "sunny") {
//     console.log("Wear sunglasses.");
// } else {
//     console.log("Check the weather app!");
// };


// control flow - the order of how we begin and end our code.



// FUNCTIONS 

// Re-usable blocks of code.

// function sayHi (name) {
//     return("Hello" + name);
// };

// console.log(sayHi("Anna")); 

// function calculateNums() {
//     let a = 56;
//     let b = 20;

//     return(a+b);
// };

// console.log(calculateNums());


// Types of Functions 

// 1. Expressions  - Function passed into Variables

// const greet = function(name, age) {
//     console.log("Hello there!", name, "I am", age, "years old.");
// };
// greet("john", 12);


// 2. Arrow Functions - Shorter and Simpler way of writing functions.

// const greet = (name, age) => {
//     console.log("Hello There!", name, "I am", age, "years old!")
// };

// greet("anna", 15);

// const greet = () => console.log("Hello There!");
// greet();

// let fruitList = ["apple", "banana", "cherry"];

// const fruit = () => {
//     for(let i = 0; i < fruitList.length; i++) { 
//         console.log(fruitList[i]);   
//     };
    
// };

// fruit();


// // 3. Asynchronous Functions - (async) - help Javascript "wait" for things while something is being done. e.g like fetching data from an API

// // syntax 

// async function getWeather() {
//     console.log("Fetching weather data...");

//     const response = await fetch ("https://api.weather.com/data");
//     const data = 
    
// }


// SCOPE - variables are in your code and who can use them.

// let snack = "chocolate-cookie"; // global scope - any varibale outside a function. It can be accessed by anybody at any time.

// function eatSnack() {
//     let drink = "milk"; // local scope - Youll find this inside a function or a block. It can only be accessed inside a block or function.
//     // console.log(snack);
//     console.log(drink);
// }
// eatSnack();
// console.log(snack); //console log





// ARRAYS - These are lists that can contain nums, strings, emojis, characters etc...

// Array Syntax 

// let animals = ["bear", "monkey", "elephant", "lion", "zebra"];

// Indexing - getting the index of an element in an array.

// console.log(animals[3]); // lion
// console.log(animals[0]); // bear

// console.log(animals[animals.length -4]); // accesses elements from the end of the list.



// ARRAY METHODS

//1 .push() - adds an element to the end of the list 

// animals.push("rhino");
// console.log(animals);

//2 .pop() - removes the last element

// animals.pop()
// console.log(animals);

//3.shift() - removes the first element

// animals.shift()
// console.log(animals);

//4 .unshift() - Adds to the start

// animals.unshift("giraffe")
// console.log(animals);

//5. slice() - Takes a piece of element from the array and creates a new array.

// let newList = animals.slice(3);
// console.log(animals);
// console.log(newList);

//.join() - Combines an array into a string

// let nums = [1, 20, 50, 520, 1236, 12];

// let numNew = nums.join();
// console.log(numNew);

// console.log(animals.join());


// let rawString = ""

// let arrayToString = animals.join();

// rawString = arrayToString;

// console.log(rawString);


// .split()

// let covertToArr = rawString.split(",");
// console.log(covertToArr);


// Array Iterator Methods 

// 1. forEach() - Does something for ecach item in an array.
// animals.forEach((animal, index) => {
//     animals[index] = animal[0].toUpperCase() + animal.slice(1);

//   }
// );
// console.log(animals);

// 2. filter() - Keeps only what we want to keep.

// let animals2 = ["bear", "monkey", "elephant", "lion", "zebra", "baboon"];

// let myAnimal = animals2.filter(animal => animal[0] === "b");

// console.log(myAnimal);


// 3. find() - finds the "first" item that matches a condition.

// let animals2 = ["bear", "monkey", "elephant", "lion", "zebra", "baboon"];

// let firstAnimals = animals2.find(animal => animal[0] === "b");
// console.log(firstAnimals);


// 4. .map() - Changes every item and creates a new array.
// let prices = [20, 10, 60];

// let double = prices.map(price => price * 2);
// console.log(double);

// 5. reduce() - combines everything into one value. Reduces an array into a single result. Mostly used to add up numbers.

// let prices = [20, 10, 60];

// let total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);


// OBJECTS - key-value pairs. e.g a datbase containing somebodys info.

// syntax

// let person = {

//     name : "Milly",
//     age : 27,
//     hobby : "sleeping"
// };

// console.log(person.hobby);

// person.name = "Miltred";
// console.log(person);


// NESTED OBJECTS - Objects within Objects

// let person = {
//     name : "Milly",
//     age : 27,
//     hobby : "sleeping",
//     contact : {
//         email: "milly@moringastudent.co.ke",
//         phone: +254-756-287-591,
//         linkedIn: "www.linkedin/milly.com",
//     },
//     address : {
//         country: "Kenya",
//         city : "Nairobi",
//         physical_address : "Thika"
//     },
// };

// console.log(person.contact);
// console.log(person.address);


// MODIFYING OBJECTS - add, delete, change object properties.

// let person = {
//     info : {
//     name : "Milly",
//     age : 27,
//     hobby : "sleeping",
//     },

//     contact : {
//         email: "milly@moringastudent.co.ke",
//         phone: "+254-756-287-591",
//         linkedIn: "www.linkedin/milly.com",
//     },

//     address : {
//         country: "Kenya",
//         city : "Nairobi",
//         physical_address : "Thika"
//     },
// };

// change 
// person.info.hobby = "dancing";
// console.log(person);

// add
// person.info.gender = "female";
// console.log(person);

// // remove/delete
// delete person.contact.linkedIn;
// console.log(person);


// LOOPS - for in, for of, while 

// Loops excute code until a condition is met.

// for loops - Repeats code a specific number of times.

// let animals2 = ["bear", "monkey", "elephant", "lion", "zebra", "baboon"];

// syntax 

// for(let i = 0; i <= animals2.length; i++) {
//     console.log(animals2[i], i)
// };


// Infinite Loop - A loop that keeps on executing because no condition has been met / we have not told the loop when to stop.

// for...in loop - Goes through all keys or properties in an object.

// let person = {
//     info : {
//     name : "Milly",
//     age : 27,
//     hobby : "sleeping",
//     },

//     contact : {
//         email: "milly@moringastudent.co.ke",
//         phone: "+254-756-287-591",
//         linkedIn: "www.linkedin/milly.com",
//     },

//     address : {
//         country: "Kenya",
//         city : "Nairobi",
//         physical_address : "Thika"
//     },
// };


// for(let key in person.address) {
//     console.log(key + ": " + person.address[key])
// };


// for.. of - Loops through array values instead of objects.

// syntax 

// let animals2 = ["bear", "monkey", "elephant", "lion", "zebra", "baboon"];

// for(let animal of animals2) {
//     console.log(animal, "is my favorite animal.")
// };

// while loop - Loops until a condition is met (until the code becomes false)

// let greeting = "Hello";
// let i = 3; //counter

// while(i > 0) {
//     console.log(greeting);
    
//     i--;
//     //greeting = greeting - 1
// };


// Destructing & Spread Operator - A Short and Simple way of unpacking or combining arrays or objects.

// let animals2 = ["bear", "monkey", "elephant", "lion", "zebra", "baboon"];


// Destructing - Unpacking an array one item at a time 


// let [first, second, third] = animals2;
// console.log(first);
// console.log(second);
// console.log(third);


// Spread Operator - Creates a copy of the original array. You can add more items to it.

// let moreAnimals = [... animals2, "tiger", "buffalo", "ox"];
// console.log(moreAnimals);


// ----------------------------------------------------------------------------

// DOM Manipulation - DOM(Document Object Model) - Renovating your webpage.


// Change Text 

// document.getElementById("personal-greeting").innerText = "Hi There!";

// Change font color 

// document.getElementById("info").style.color = "white";


// Eventlisteners - These make your webpage interactive.

// click

// const button = document.getElementById("clickme");

// button.addEventListener("click", () => {
//     alert("Hello There!");
// });


// -------------------------------------------------------------------

// JSON - JavaScript Object Notation - your own fake/dummy server.

// fetch("http://localhost:3000/animals")  // get data from my server link
//  .then(response => response.json())  // wait for a promise to be returned 
//  .then(data => console.log(data));   // console log all the data from the json server


















































