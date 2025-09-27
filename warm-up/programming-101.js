/*
console.log("Hello, World!");
console.log(7)
console.log(true)

const a = 10;
const b = 20;
const sum = a - b;
console.log(sum);
const multiply = a * b;
console.log(multiply);

let x = 20;
console.log(x)

let firstName = "John";
let lastName = 7;
let fullName = firstName + " " + lastName;
console.log(fullName); //John 7 //if add string with no, it converts no to string and concatenate
let a = 2;
b = 3
let num = a + b;
console.log(num) //5


let p = a + " " + b;
console.log(p) //2 3

let age = 25;
age = 12;
console.log(age) //12

let arr = ["p", 2, true]
console.log(arr)//["p", 2, true]


let arr = ["p", 2, true]
console.log(typeof arr) //object
console.log(arr[1]) //2
console.log(arr[3]) //undefined

let arr = ["p", 2, true, [1, 2, 3]]
console.log(arr[3][1]) //2
console.log(typeof arr[3]) //object
console.log(arr[3].length) //3
  */

// object in javascript

// it conatins data in key value pair

let obj = {
    name: "Harsh",
    lastName: "Kumar",
    Roll: 6,
    bool: true,
    marks: [1, 2, 3, 4]
}
console.log(obj)
console.log(obj.Roll)
console.log(obj.marks)

//in array we dont have control over index but in object we have control over key
console.log(obj.name + " " + obj.lastName) //Harsh Kumar