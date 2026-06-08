// different operators

let x=3
let y=2

console.log("Addition",x+y)
console.log("Subtraction",x-y)
console.log("Multiplication",x*y)
console.log("Division",x/y)
console.log("Remainder",x%y)
console.log("Exponent",x**y)


// urinary increment or decrement 

let a= 30

console.log(a++)
console.log(a)

console.log(a--)
console.log(a--)
console.log(a)


// comparision operators 

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false



// delete operator

let user={
    name:"alice",
    age:34
}

console.log(user.age)
delete user.age
console.log(user.age)

// ternary operator (condition) ? true : false 

console.log(true?"Alice":"bob")
console.log(false?"Alice":"bob")

let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob

// sample question 

let n= 2*3**3-1;
console.log(n)