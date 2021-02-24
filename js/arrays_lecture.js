"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> [1,2,3,4,5]

// An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];
console.log(pies);


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["douglas", "kenneth", "samuel", "justin", "fernando"]

var names = ["doogles", "kenneth", "samuel", "justin", "fernando"];
console.log(names);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var DoW = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(DoW);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favFoods = ["tacos", "sushi", "tacos", "Burgers", "tacos", "Hot Wings", "tacos"];
console.log(favFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

console.log("The length of shapes is: " + shapes.length );


// TODO: console.log the length of the instructors array

console.log("The length of instructors array is: " + names.length );


// TODO: console.log the length of the daysOfTheWeek array

console.log("The length of days of week array is: " + DoW.length );


// TODO: console.log the length of the favoriteFoods array

console.log("The length of favorite foods array is: " + favFoods.length );


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.


// TODO TOGETHER: What do we expect the following to output?

	console.log(shapes[0]); //
	console.log(shapes[1]); //
	console.log(shapes[2]); //
	console.log(shapes[3]); //
	console.log(shapes[4]); //



// TODO: console.log each element of the instructors array

console.log(names[0]); //
console.log(names[1]); //
console.log(names[2]); //
console.log(names[3]); //
console.log(names[4]); //

// TODO: console.log the first three elements of the daysOfTheWeek array

console.log(DoW[0]);
console.log(DoW[1]);
console.log(DoW[2]);

// TODO: console.log the first three elements of the favoriteFoods array

console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);

// console.log(Math.floor % 2 === 0[3])

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

// we know we have to get the length of the array - 1
// array.length - 1 <== represents the last item in an array

//1. create function named returnLastElement
//2. this function accepts an array
//3. get the last item in the array by using array.length - 1
//4. return the last item


// console.log(returnLastElement(instructors)); //fernando
// console.log(returnLastElement(daysOfTheWeek)); //sunday

function returnLastElement(array) {
    return array[array.length - 1];
}

console.log((returnLastElement(favFoods)))

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape




// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

for (var i = 0; i < shapes.length; i++){
    console.log("looping through shapes Array. We are at  "  + shapes[i] + " at position " +i);
    if (shapes[i] === "circle"){
        alert(shapes[i] + " is my favorite shape!")
    }
}


// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?


// TODO: Using a for loop, iterate through the instructors array and console.log each instructor


// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week


// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food



// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"



/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
var printShape = function (shape){
    console.log(shape)
}
// shapes.forEach(function (shape)){
//     console.log(shapes)
//}

shapes.forEach(printShape)

function myForEach

// TODO TOGETHER: Using a for each loop, console.log each element from the following array: var pies = ["apple", "cherry", "key lime", "huckleberry"];



// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor



// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week



// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
