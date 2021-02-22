

// Ex #1

// const number = parseInt(prompt('Enter an integer: '));
//
// for (let i = 1; i <= 10; i++) {
//
//     const result = i * number;
//
//     console.log(`${number} * ${i} = ${result}`);
// }


// Ex #2
//
// const number = parseInt(prompt('Enter an integer: '));
//
// for(let i = 1; i <= 10; i++) {
//
//     const result = i * number;
//
//     console.log(`${number} * ${i} = ${result}`);
// }

// Ex #3


// function getRandomNum(x) {
//     for (Math.floor(Math.random(20, 200) * Math.ceil(200))){
//
//     }
// }
// if (i % 2 ===0 ) {
//     console.log(i + " is Even")
// } else if (i % 3 ===0){
//    console.log(i + " Is Odd")
// }

// Ex #3 modified
// for (var i = 0; i <= 9; i++) {
// var ranNum = Math.floor(Math.random() * 200) + 20;
//
// if (ranNum % 2 ===0) {
//     console.log("Your number " + ranNum + " is Even")
// } else if (ranNum % 2 !==0){
//    console.log("OMG!! Your number " + ranNum + " Is Odd")
//     }
// }

//end


// console.log(getRandomNum(200));
//
// console.log(getRandomNum(20));
//
// console.log(Math.random());

// Ex #4

// function numberStack() {
//     var numRows = 20;   // ran to 20 just to see how it would look (lol)
//     var output = '';
//     for (var i = 1; i <= numRows; i++) {
//         for (var num = 1; num <= i; num++) {
//             output += i + '  ';
//         }
//         console.log(output);
//         output =  '';
//     }
// }
//
// numberStack();


// teachers demo -
// for (var outerLoop = 1; outerLoop <= 0; outerLoop ++){
//     var output = "";
//     for (innerLoop = 1; innerLoop <=  outerLoop; innerLoop++){
//         output= + output + outerLoop;
//     }
// }



// Ex #5

// for (var i = 5; i <105; i = i + 5) {
//     console.log(i)
//     if (i === 110) {
//
//         break;
//     }
// }
// teachers version

// for (var i = 100; i >= 5; i -= 5){
//     console.log(i)
// }


//Ex #6


// Create a file named break_and_continue.js in the js directory.|
// Prompt the user for an odd number between 1 and 50. -
// Use a loop and a break statement to continue prompting -
// the user if they enter invalid input. |
// Use a loop and the continue statement to output all the odd -
// numbers between 1 and 50, except for the number the user entered.|



// var x = 27
// var i;
// for (i = 1; i < 31; i++) {
//     if (i % 3 !== 0) {
//     x == "Oops, you skipped 27"
//         // console.log(27 === "Oops You skipped number 27");
//         continue;
//     }
//     console.log("The number is " + i + "");
// }
//
// var i = 1
// while(i < 65536) {
//     i = i * 2
//     console.log(i)
//     i++
// }


// (usersNumber % 2 === 0 || !isNumberInRange(usersNumber))



