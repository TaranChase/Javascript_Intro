
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

// // 1. forEach() - Does something for ecach item in an array.
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

