

// var areWeThereYet;
//
// while(!areWeThereYet){
//     areWeThereYet = confirm("are we there yet?")
// }

// var haveToy = confirm("Can i have the toy please??")
//
// while (!haveToy){
//     haveToy = confirm("Please, Please,Please,Please,Please,Please,Please,Please,!!!")
// }
//
// if(haveToy){
//     alert("thanks!! your the best , Can't wait to go outside!!")
// }
//
// var waitingForToy = confirm("are we still waiting?!?")
//
// while (waitingForToy){
//     haveToy = confirm("Well how about now, Why am I still waiting!!!")
// }
//
// if(haveToy){
//     alert("thanks!! your the best , Can't wait to go outside!!")
// }

// var x = 0;
//
// while ( x < 10 ) {
//     --x;
//     console.log(x)
// }
// console.log("Hey!! Look at me!! " + x)
//
//
// var weatherIsMessy = true;
//
// while(weatherIsMessy){
//     alert ("Well lets have soe hot chocolate!")
//     weatherIsMessy = confirm("Is it still messy outside ?")
// }
// alert("Excellent - Let's all go outside!")

// var weatherIsMessy = false;   // while false Nothing will run
//
// while(weatherIsMessy){
//     alert ("Well lets have soe hot chocolate!")
//     weatherIsMessy =confirm("Is it still messy outside ?")
// }
// alert("Excellent - Let's all go outside!")


// function decrementFromTen() {
//
//     var x = 10;
//
//     while (x < 10) {
//         --x;
//         console.log(x--)
//     }
//
//     return console.log("hey, i finished counting")
// }
//
// decrementFromTen()


// function  incrementUntilTen(num){
//     while (num < 10 ){
//         num += 1
//         console.log(num)
//     }
// return console.log("wrapped up in counting!")
// }
//
// incrementUntilTen(1)



// hoiw many times does the loop run?


// function  incrementUntilTen(num){
//     var counter = 0;
//     while (num < 10 ){
//         num += 1;
//
//         counter = counter +1;
//
//         console.log(num)
//     }
//     return console.log("wrapped up in counting! the loop ran " + counter + "times")
//
// }
//
// incrementUntilTen(1)

// do while Loop

//A for loop is a robust looping mechanism available in many programming languages. JavaScript's implementation syntax matches that of many other languages.

// for (/*initialization*/; /*condition*/; /*increment*/) {
//      body
// }

//          How Long       how many times     condition met

// for (vr incrementor = 1; incrementor <= 10; incrementor++) {
//      console.log("this loop has run " + incrementor + "time(s).")
// }

// for (var increment = 0; increment < 5; increment++){
//     console.log("hello Marco " + (increment +1) + " Times)")
// }


// function sayHelloXTimes(num) {
//     for (var num = 20; num >= 0; num--){
//         if ( num % 5 === 0) {
//             console.log("Howdy!! Cuurently num is: " +num);
//         }else {
//             console.log("Hello! Currently num is :" + num);
//         }
//     }
//     // return "hello"
// }
//
// sayHelloXTimes(25)

// var x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing it not knowing what it was, and now I'll just keep on singing this because");
//     x++;
//     if (x === 5) {
//         alert("LambChop, cut it out!!")
//         break;
//     }
//     alert("Again! (Pssst; My count is:) " + x)
// }
// alert ("hello Nicholas!")

// for (var i = 5; i <100000; i = i + 5) {
//     console.log(i)
//     if (i === 555) {
//
//         break;
//     }
// }

// for (var i = 1; i < 100; i = i - 1) {
//
//     if (i === 99) {
//
//         break;
//     }
// }
//
// console.log( i + "bottles of beer on the wall")

// for (var i = 0; i < 100; i++) {
//
//     if (i% 2 !== 0){
//
//         continue
//     }
//     console.log(i);
// }


// for (var i = 0; i < 50 ; i++ ) {
//     if (i % 6 === 0 ){
//         console.log(("CodeUp"))
//     }else if (i % 2 ===0){
//         console.log("Code")
//     }else if (i % 3 ===0){
//         console.log("up")
//     }
//     else if (i ===25) {
//         continue;
//     }
//         console.log(i)
// }



