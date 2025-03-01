console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName() {
  return "The Flying Spaghetti Monster wants to talk about Russel's teapot";
}
console.log('If you want to go down a philosophy rabbithole;', helloName());

// I wanted to try this a different/harder way because life is pain.
function helloName1(name1) {
  console.log(`Behold! His royale majesty, First of their Name, Sir ${name1} Rottweiler Featherbottom.`);
}
// Remember to call the function to test
helloName1('Optimus')

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('addNumbers:', firstNumber, secondNumber )
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}
console.log("My age using the addNumbers function;", addNumbers(20, 19));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log("Numbers to multipy:", num1, num2, num3 )
  let total = num1 * num2 * num3;
  return total;
}
console.log("The total:", multiplyThree(17, 26, 39));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log("The number is:", number )
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
}
}
console.log("Is this positive?", isPositive(-39));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let numArry = [1, 2, 3]
function getLast( array ) {
  return array[array.length-1] || null;
}
//added an array here to test and an "or" conditional for undefined (null) return

console.log("The last element of this array:", getLast(numArry));
console.log("Should return undefined/null:", getLast([]));



// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( array ){
  for ( let i=0; i<array.length; i++ ){
    if ( array[ i ] === 1 ){
    return true;
    }
} return false;
}

// updated logic if statement and return for false

console.log("Should return true;", find([10, 66, 119, 1]));
console.log("Should return false/undefined;",find([]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
