// different loops in javascript

// while loop

let n=0

while(n<91){

    console.log(n)
    n+=10
    
}

//do while loop

let condition = false;
 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);


// for loop 


for(let i=0;i<6;i++){
    console.log(i)
}


// arrays and for loop

let values =[10,20,30,40]

for (let i=0;i<values.length;i++){
    console.log(values[i])
}       


// for of loop


let value=[20,30,50,100]

let sum=0

for(let number of value){
    sum+=number
}

console.log(sum)


// for in loop

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};
console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin
