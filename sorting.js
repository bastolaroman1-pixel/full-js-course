
let sorting=()=>{

    let i,j,temp;

    for(i=0;i<values.length;i++){

        for(j=0;j<values.length-1-i;j++){
            if(values[j]>values[j+1]){
                temp=values[j]
                values[j]=values[j+1]
                values[j+1]=temp
            }
        }
    }

}


let values=[50,20,30,10,40]

sorting()

console.log(values)
