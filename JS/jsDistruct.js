// Array destructuring
const num = [1, 2, 3, 4, 5]; // You need actual values in the array
const [f, s, t, ...rest] = num;

console.log(f, s, t);   // 1 2 3
console.log(rest);      // [4, 5]

// Object destructuring
const obj = { name: "John", age: 30, city: "New York" };
const { name, age, ...others } = obj;

console.log(name, age);  // John 30
console.log(others);     // { city: "New York" }
const arr=[1,2,3];
const arr1=[4,5,6,7];
const newarr=[...arr,...arr1];
console.log(newarr);