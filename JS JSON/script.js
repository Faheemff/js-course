// json ka javascript mai name (javascript object Notation) hai is ka use javascript mai data format hai 
// jo human ka leya readable hota hai is ka matlab hai ek insaan asaani se samajh sakte hain or computer 
// mens machine ka leya process karna bhi assan ho ta hai

// example:

const jsonString = '{"name": "Ali", "age": 25}';
const jsObject = JSON.parse(jsonString);
console.log(jsObject);  // Output: Ali



const jsObject2 = { name: "Ali", age: 25 };
const jsonString2 = JSON.stringify(jsObject);
console.log(jsonString2);  // Output: {"name":"Ali","age":25}
