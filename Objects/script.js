//  javascript mai object ek is tara ja container hota hai jes mai hm ek sa jayda  value store kr sehkta hai 
// object mai hm ek function bi bana sehkta hai 
// object ka ander multiple object bana sehkta hai is tarika ko hm nasted kehta hai

// example: of only object 

let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

// how to asscess object let see 

console.log(person.name + " " + person.age + " " +  person.city);

// example: of object with function

let person2 = {
    name: "John Doe",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello " + this.name);
    },
    greet2: ()=> {
        console.log("Hello ");
    }
}

person2.greet(); // Output: Hello John Doe

person2.greet2(); // Output: Hello



// example: of object with nested objects

let person3 = {
    name: "John Doe",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

console.log(person3.address.street + " " + person3.address.city + " " +  person3.address.state); // Output: 123 Main St New York NY
