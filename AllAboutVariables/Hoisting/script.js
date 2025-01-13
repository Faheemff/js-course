// javascript mai hoisting bi hoti hai ap variable ya function ko bane sa pehla use kr sehkta hai 
// pr let and const ko hoistion ni kr sehkta kue ka in ko assign krna hota hai


// hoisting ka sehda matlab ap variables ko bana sa pehla use kr sehkta hai

// example 

console.log(a); // Output is Undefined

var a = 30;
console.log(a); // Output is 30;


// example with function


test();
function test() {
    console.log('Hello ');
}


// erro function is not Hosited example



console.log(b); // that called b  is not access
let b = ()=> {
    console.log("kaya hall hai");
}