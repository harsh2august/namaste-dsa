/*
function printHelloWorld() {
    console.log("Welcome to Mumbai..")
}
printHelloWorld() //Welcome to Mumbai..

function greet(name) {
    console.log(`Hello ${name}`)
}
let x = "Virat Kohli"
greet(x) //Hello Virat Kohli


function sum(a, b) { //arguments
    return a + b
}
const add = sum(3, 5) //parameters
console.log("Sum is:", add)


function square(num) {
    return num * num
}
const result = square(99)
console.log("Square is:", result) //Square is: 9801



function checkVoter(age) {
    if (age <= 0) {
        console.log("Age cannot be negative or zero")
    }
    else if (age > 0 && age >= 18) {
        console.log("You are eligible to vote")
    } else {
        console.log("You are not eligible to vote")
    }
}
checkVoter(20) //You are eligible to vote
*/

function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`)
    }
}

isEven(10) //10 is an even number
isEven(15) //15 is an odd number
