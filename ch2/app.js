// const a = 5, b = 2;
// let myName = "JH";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "Jehee";

// console.log("your new nmae is " + myName);

// const amIFat = true;    /* true, false, null */
// let something;
// console.log(something, amIFat);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// const nonsense = [1, 2, "hello", false, null, true, undefined, "JH"];

// //Get Items from array
// console.log(daysOfWeek[5]);

// //Add one more day to the array
// daysOfWeek.push("sun")

// console.log(daysOfWeek);

// /*
// const player = {
//     name: "JH",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);   //console.log(player[name]);
// player.lastName = "potato";
// console.log(player);
// */

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b) {
//     console.log(a + b);
// }
// function divide(a, b) {
//     console.log(a / b);
// }
// plus(8, 60);
// divide(20, 5);

// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log("hello! " + otherPersonsName + " nice to meet you.");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("Jehee");

// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },

//     minus: function (a, b) {
//         return a - b;
//     },

//     times: function (a, b) {
//         return a * b;
//     },

//     divide: function (a, b) {
//         return a / b;
//     },

//     power: function (a, b) {
//         return a ** b;
//     },
// }

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age === 100) {
    console.log("Wow, you are wise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}