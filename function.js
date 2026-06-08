function greet() {
    console.log("Hello World")
    console.log("Namaste Nepal")
}

greet()



// variable shadowing

let counter = 100
console.log(counter)

{
    let counter = 2000
    console.log(counter)
}

counter = counter + 100
console.log(counter)


//var shadow

var count = 340

function test() {
    var count = 2500;
    console.log(count)
}

console.log(count)
test()