//
//
// // EXERCISE 3.1
//
// var lm = parseInt(prompt("how many nights did ypou rent the Little Mermaid?"));
// var bb = parseInt(prompt("How many nights did ypu rent Brother Bear?"));
// var he = parseInt(prompt("how many nights did you rent Hercules?"));
// var ppd = parseInt(prompt("what was the rental rate?"));
//
// var rental_cost = alert("you owe$" +(ppd + (lm+bb+he)));
//
//
// // excercise 3.1 revisited
//
// console.log("hello from external JavaScript");
//
// alert(" Welcome to my website");
//
//
//



var increment = function(x) {
    return x + 1;
};

var two = increment(1);

function increment(someNumber) {
    return someNumber + 1;
    console.log('you will never see this.');
    return someNumber + 2; // This will never run
}

