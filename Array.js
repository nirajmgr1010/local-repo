// let info = ["Neeraj","Bishal","Anurag"];
// let marks = [12,45,66];
// let comb = ["neeraj",78];
// let Student = {
//     std:"neeraj",
//     std2:"Kulshingh",
// };
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }
// let arr = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of arr){
//     sum += val;
// };
// console.log(sum);
// let avg = sum/arr.length+1;
// let student = [250,645,300,900,50];
// let value = 0;
// for(let i=0; i<student.length; i++){
//     let number;
//     number = student[i]/10;        
//     console.log(number) 
// }
let heroes = ["Superman","Spiderman","Shaktiman"];
//for-of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
console.log(`The no 1 hero id : ${heroes[0]}`); //template

let items = [250,645,300,900,50];
let i =0;
for(let item of items){
    let offer = item/10;
    items[i] = items[i] - offer;
    console.log(`After apppying offer ${items[i]}`);
}