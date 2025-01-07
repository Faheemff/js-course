// javascript mai Prototypal Inheritance ek method ho ta hai jes mai jes mai jab ek object dusre object ki 
// object ki properties ko inherit kr ta hai is ko hm Prototypal Inheritance kehta hai matlb ek object apne 
// prototype se properties aur methods ko access karta hai.


// example Prototypal Inheritance:

// object 

let person = {
    name: 'John',
    age: 25
};

console.log(person);


// prototype

let person2 = Object.create(person);   // <= person2 ka prototype person hai 
person2.work = 'devolper';

console.log(person2.age);
