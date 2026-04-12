// console.log("Hello world");
// age = 24;
// age + 1;
// name = "tony stark";
// price = 150.0;
// x = null;
// y = undefined;
// name = 25;
// console.log(name);
// isFollow = true;
/*let age = 20; //let cannot redeclare it can only updated value
console.log(age);
age = 25;
console.log(age);
var name = "Neeraj";//can redeclare and updated
console.log(name);
name = "magar";
console.log(name);
const price = 300;//cannot redclare and updated
console.log(price);
let a;
console.log(a);//It gives output undefined
{
    let a = 3;
    console.log(a);
}
*/
//Object non preemptive data type
const Student = {
    name : "Neeraj",
    age : 20,
    sex : "male", 
    cgpa : 8.8,
};
console.log(Student["name"]);
console.log(Student["age"]);
console.log(Student.age);
Student.age = Student.age + 1;
console.log(Student.age);