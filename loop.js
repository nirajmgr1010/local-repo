// //for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);  // prints 0,1,2,3,4
// }
// //while loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// //do while loop
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (i < 5);
// //4. for...in loop (for objects)
// let person = { name: "Niraj", age: 20, city: "Dharan" };

// for (let key in person) {
//   console.log(key, person[key]);
// }
// // name Niraj
// // age 20
// // city Dharan
// //for...of loop (for arrays/iterables)
// let fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }
// // apple, banana, mango
let guessnumber = 44;
let userguess = prompt("Enter the correct value to guess the number: ");
while(userguess != guessnumber){
    console.log("Please re enter the value")
}
console.log("Congratulation you entered correct number")