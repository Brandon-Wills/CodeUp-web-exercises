

"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (colChoice){
    if(colChoice === "blue"){
        return ("blue is the color of the sky");
    }else if (colChoice === "red") {
    return ("Red is the color of blood");

}else{ return ("I don't know that color");}

}
analyzeColor("blue");

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'brown', 'violet', 'turquoise'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor)
console.log(randomColor)

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor) {
    case "I like blue and red":
        alert("What a coincidence, that's my favorite!");
        break;
    case "brown":
        alert("I'm not a fan");
        break;
    default:
        alert(randomColor + " isn't my favorite, but if that's what you like...");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userInput = prompt("what color do you like?")
alert(analyzeColor(userInput))



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calcTotal (luckyNum, customerTotal){
    if (luckyNum === 0){
        return "I'm sorry no soup for you!!"
    }else if (luckyNum === 1){
    var disc1 = customerTotal * .1
        return "Congrats you get "+ disc1 +" off, your new total is " +(customerTotal - disc1)
    }else if (luckyNum === 2){
        var disc2 = customerTotal *.25
        return "Congrats you get "+ disc2 +" off, your new total is " +(customerTotal - disc2)
    }else if (luckyNum === 3){
        var disc3 = customerTotal *.3
        return "Congrats you get "+ disc3 +" off , your new total is " +(customerTotal - disc3)
    }else if (luckyNum === 4){
        var disc4 = customerTotal *.5
        return "Congrats you get "+ disc4 +" off , your new total is " +(customerTotal - disc4)
    }else if (luckyNum === 5){

        return "Congratulations!! Today you pay nothing! :-D "
    }
}

calcTotal(1)
    console.log(calcTotal(5, 112))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6;

var luckyNumber = Math.floor(Math.random() * 6);


var customerTotal =prompt("How much is your bill?")
alert ("Your lucky number was " +luckyNumber)
alert ("Your total before discount was " +customerTotal)

alert (calcTotal(luckyNumber, customerTotal))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userNumber = confirm("would you like to enter a number?")
if (userNumber) {

    const number = parseInt(prompt("Enter a number: "));

    var result = (number + 100)
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
    {
        if (number > 0) {
            console.log("The number is positive");
        } else console.log("The number is negative");
    }

    console.log("Your entry plus 100 is " + result)

}