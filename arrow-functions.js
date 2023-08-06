/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // in paranthesis is the 'paramaters'
    //between curly braces is the code block
    return a + b;
}
let sum = addTwoNumbers(3, 5); // this is how you call the function
console.log(sum);

// Arrow Function With Parameters using the ES6 syntax.
// They are usually used as 'constants' so they can't be overwritten or misused later. Also the must be defined before being called.

const addTwoNumbers1 = (a, b) => {
    // in paranthesis is still the 'paramaters'
    //code block
    return a + b;
};
let sum1 = addTwoNumbers(3, 5); // function is called the same way
console.log(sum1);

// Single Line Arrow Function With Parameters (curly braces can be removed and the return statement, fat arrow is the 'return'. But if the code is more complex, you need to put it in curly braces and use 'return' as above.)
const addTwoNumbers2 = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) => (a + b); <-also valid wih paranthesis
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySomething = (message) => console.log(message); //Since there's only one parameter, it doesn't need the parenthesis around it, but if more than one, wrap in paranthesis.
saySomething("Hello World"); // = console.log

//But if you have no parameter, you must put an empty set of parnthesis to tell JS you're declaring a function.
const sayHello = () => console.log("Hello");

// Returning Multiple Lines

const returnMultipleLines = () => "<p>" + "This is a multiline string!" + "</p>";
console.log(returnMultipleLines());
