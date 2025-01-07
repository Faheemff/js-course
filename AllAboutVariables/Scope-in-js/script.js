// javascript mai teen kisma ka scope hote hai jis number 1 block scope- number 2 function scope or number 3 global scope
// hoti hai javascript mai javascript mai ES5 mai serf global scope var but javascript ka new version mai ES6 mai function scope or Block scope bi add keya gai hai ab in ko example ka sat samjta hai ok


// Global Scope

var globalNumber = 1;


function globalFunction() {
    console.log(globalNumber);
}

globalFunction(); // Output: 1
console.log(globalNumber); // Output: 1



// Function Scope(Local Scope) is Function Scope ko hm Local Scope ki bol sehkta hai 

function functionScope() {
    var LocalScope = 3;
    console.log(LocalScope); // Output : 3
}

functionScope();
console.log(LocalScope); // Output : not defined ya error


// Block Scope ---> ager ap let or const sa block scope mai variables create krta hai to wo serf
// block scope mai access hogai ager block ka ander ap var sa variables create krta hai to wo 
// block ka behar bi access ho gi kue ka var block scope ko ignore kr da ga serf block scope ka ander 
// let or const hai ya ES6 ka new variables hai jin ki help sa block scope javascript mai add keya gaya hai


// example {}

{
    let blockVariable = 4;
    console.log(blockVariable); // Output : 4
}

console.log(blockVariable); // Output : not defined ya error

{
    const blockVariable = 4;
    console.log(blockVariable); // Output : 4
}

console.log(blockVariable); // Output : not defined ya error

