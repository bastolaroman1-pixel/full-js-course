function greet(){
    console.log("Namaste, User")
}


greet()            // calling function



// calculative function 

let temperatures;
let meanTemperature;
let sum;

function getMeanTemperature(){
sum=0;

for(let i=0;i<temperatures.length;i++){
    sum+=temperatures[i]

}
meanTemperature=sum/temperatures.length
}

temperatures=[12,34,23,34,18,20,26]
getMeanTemperature()

console.log(`meanTemperature ${meanTemperature}`)


// function with parameters

function add(a,b){
   return console.log(a+b)
    
}

add(5,5)

add(9,10)


//2

function getElement(elements,index){
    return elements[index]
}

let names=["ram","sita","gita","hari"]

let name=getElement(names,3)

console.log(name)


// shadowing 

let a = 100, b = 200, c = 300;
function test(a) {
     let b = 10;
     console.log(a); // parameter a
     console.log(b); // local variable b
     console.log(c); // global variable c
}
test(1);   // -> 1
      // -> 10
      // -> 300
console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
