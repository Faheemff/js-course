// Javascript mai operator 4 kasem ka hoti hai jes mai number 1 mai assignment operator
//  number 2 mai arithmetic operator number 3 mai comparison operator number 4 mai Logical operator
//  hoti hai javascript mai


// 01) Assignment operator

// + is operator ka name javascript mai Addition operator hai is ka kam javascript
//  do number ko plus krna or do value ek dusre sa sath add krna is ka ya kam hai javascript mai


// example

let a = 10;
let b = 30;

console.log(a + b);

// another example is mai ek string hai or ek number hai javascript mai addition operation
//  string or ko apase mai mela kr answer mai ya return krana ga ager ap ka pass 'str' + 40
//  hai to ya return kara ga  str40 <== ya return kra ga

let str1 = 'Str';
let str2 = 40;

console.log(str1 + str2);




// -

// - is operator ka name javascript mai Subtraction operator hai is ka kam javascript

// example

let c = 50;
let d = 20;

console.log(c - d);


// *

// * is operator ka name javascript mai Multiplication operator hai is ka kam javascript

// example

let e = 10;
let f = 5;

console.log(e * f);


// ( / )

// ( / ) is operator ka name javascript mai Division operator hai is ka kam javascript

// example

let g = 20;
let h = 5;

console.log(g / h);


// %

// % is operator ka name javascript mai Modulus operator hai is ka kam javascript

// example

let i = 10;
let j = 3;

console.log(i % j);


// ++

// ++ is operator ka name javascript mai Increment operator hai is ka kam javascript

// example

let k = 10;

console.log(k++); // Output is 10
console.log(k); // Output is 11


// --

// -- is operator ka name javascript mai Decrement operator hai is ka kam javascript

// example

let l = 10;

console.log(l--); // Output is 10
console.log(l); // Output is 9



// 02) Assignment Operators


// = (Simple Assignment):

// example:

let m = 10;
//----^-----//  <== Simple Assignment 
m = m + 5;
console.log(m); // Output is 15

// += (Addition Assignment):

// example:

let n = 10;
let u = 30;

console.log(n += u); // <=== += ka matlab javascript mai n + u 

// -= (Subtraction Assignment):

// example:

let gg = 8;
gg -= 3;  // a = a - 3 => 8 - 3 = 5
console.log(gg);  // Output: 5


// *= (Multiplication Assignment):

let sk = 9;
sk *= 40; // <= example 9 * 40 hai is mai ya ho raha hai is operater mai ya kam ho raha hai
console.log(sk); // Output: 

// /= (Division Assignment):

let ei = 49;
ei /= 3;
console.log(ei);


// %= (Modulus Assignment):

let ti = 10;
ti %= 3;
console.log(ti); // Output: 1



// 03) = Comparison operator 

// == (Equals operator);

//  ya operator do value comparison kr ta hai but type ko ignore kr ta hai  example let see!

let x = 10;
let y = '10';

console.log(x == y ); // is mai ham ko true meila ha kue is mai is na serf equal keya na ka is ki type dehki ho


// === (Strict Equality):

// ya operator javascript mai do value ko comparison is in ki type dehka da type mena ka wo num hai ya str array ab is ko example sa samjta hai !

let q = 1;
let s = '1';

console.log(q === s); // is mai hm ko false mila ga kue q variable number hai s variable string hai is nai is ko equal keya but is ki type bi check ki lka wo same hai ka ni


// != (Inequality):

// ya operator javascript mai ya dehka ta hai ya do value same hai but ya type ko ignore kr ta hai example ek number hai jes  
// number 5 hai or ek string hai jes mai '5' ya operator in ko dehkga pir in compersion krhai ga ager ek string hai to is ko number 
// mai converted kr dai ga eb example mai dehta hai 

let w = 10;
let z = '10';

console.log(w!= z); // is mai ham ko false meila ga kue w variable number hai z variable string hai pir ya string ko number mai convert kr dai ga pir hm ko answer mai false meila ga ?

// !== (Strict Inequality):

// ya operator javascript mai ya dehka ta hai ya do value same hai but ya type ko bi consider kr ta hai example ek number hai jes example 

let v = 10;
let t = '10';

console.log(v!== t); // is mai ham ko true meila ga kue v variable number hai t variable string hai pir hm ko ya true da ga

// > (Greater Than):

// ya operator javascript mai do value mai ya dehkta hai ka ek value dusre value sa barhi hai ka ni ya dehkta hai 

let aa = 10;
let bb = 5;

console.log(aa > bb); // is mai aa variable bb variable sa barha hai to answer true meila ga to ager ni to anwer false meila ga

// < (Less Than):

// ya operator javascript mai do value mai ya dehkta hai ka ek value dusre value sa choti hai ka ni ya dehkta hai

let cc = 10;
let dd = 5;

console.log(dd < cc); // is mai cc variable dd variable sa choti hai to answer true meila ga to ager ni to anwer false meila ga



// >= (Greater Than or Equal To):
// <= (Less Than or Equal To):