console.log("working");

//method 1 :- Creating and assigbing values to an array...........
let names = ["Raj", "Nikhil", "Riya", "Kiran", "supriya", ];
console.log(names);

//metthod 2 :- Create an empty array, and then start assigning  values to them as pre the index positions
let name2 = [];

name2[0] = "Ridoff";
name2[1] = "kuldeep";
name2[2] = "marry";
name2[5] = "Ravikant";

console.log(name2);

//method 3 : -create an array using an array constructor..........
let name3 = new Array("raju", "shyam", "baburav");
console.log(name3);

let name4 = new Array("Age-24", "Nikhil", "Nashik", "Maharastra");
console.log(name4);

//Push , Pop , Shift , Unshift , Length , indexOf , LastIndexOf
// Push - add value at the last position only

names.push("shyam");
console.log(names);

//pop helps us to remove the value from the last position

names.pop();
console.log(names);

//Shift remove from the first position and Unshift  adds on the first position

name2.shift();
console.log(name2);

name3.unshift("Hrithik");
console.log(name3);


name4.shift();
console.log(name4);

name4.unshift("Ram");
console.log(name4);

//Length

console.log(names.length);

// indexOf, LastIndexOf, join, concat, reverse, sort, slice, splice,

let num1 = [1, 2, 3, 4, 5, 5];
let num2 = [6, 7, 8, 9, 10];

console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(5));

//concat donot change the original arrya
num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(num1.concat(num2));
console.log(num1.join(" * "));

//reverse - 
// sort modified the original array
console.log(num1.reverse());
let num3 = [55, 22, 66, 33, 88, 11, 4, 3, 2];
// console.log(num3.sort());
console.log(num3);
// console.log(names.sort());
//using sort followed by reverse gives u values arranged in descending order

console.log(names.sort().reverse());

//splice  ,slice
//splice 
//frist val gives the index and second val gives the num of values to be removed
// num3.splice(2, 1, 2, 3, 5, 6, 8);
console.log(num3);

//slice
//slice - starting index is inclusive and end index is exclusive i.e. not included
num3.slice(2, 6);
console.log(num3.slice(2, 5));