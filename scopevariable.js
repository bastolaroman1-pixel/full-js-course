let  counter;
console.log(counter);  //  ->  undefined
{
         counter  =  1;
         console.log(counter);  //  ->  1
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2

for(let i=0;i<5;i++){
    counter=counter+i;
}
console.log(counter)



