// object prototype ka matlab javascript mai ek object dusre object sa inherit kr hai 
// javascript mai hr ek object ka apna ek  prototype hota hai 
// object prototype ek special object hota hai jo kisi bhi object ka parent object hota hai
// object prototype javascript mai hr ek object ka apna ek prototype hota hai 
// jab ap kise properties ka access karte hain ot javascript uske prototype ko bhi check kr ta hai 

// prototype chain

// har ek object ka apna ek prototype chain hota hai matlab ab ap ek object kesi dusre object sa inherit krta hai to wo apni properties ko uske properties se borrow krta hai.

// example:

let obj1 = {
    name: 'John',
    age: 25
}

let obj2 = Object.create(obj1);

obj2.city = 'New York';

console.log(obj2.name); // Output: John

console.log(obj2.age); // Output: 25

console.log(obj2.city); // Output: New York

// jab obj2 object ko create kr rha hai obj1 object ke prototype se

// obj1 object ke prototype ke property ke access karte hain

let obj3 = Object.create(obj2);
obj3.like = true;


console.log(obj3.like + " " + obj3.name + " " + obj3.age + " " + obj3.city);
