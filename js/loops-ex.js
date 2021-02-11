

// Ex #1
//
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


// function getRandomNum(i) {
//     for (Math.floor(Math.random(20, 200) * Math.ceil(200))){
//
//     }
// }
// if (i % 2 ===0) {
//     console.log(i + " is Even")
// } else if (i % 3 ===0){
//    console.log(i + " Is Odd")
// }

// Ex #3 modified
for (var i = 0; i <= 9; i++) {
var ranNum = Math.floor(Math.random() * 200) + 20;

if (ranNum % 2 ===0) {
    console.log(ranNum + " is Even")
} else if (ranNum % 2 !==0){
   console.log(ranNum + " Is Odd")
}
}

// console.log(getRandomNum(200));
//
// console.log(getRandomNum(20));
//
// console.log(Math.random());


