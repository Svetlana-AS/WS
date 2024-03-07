// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = (num) =>{
    if(num<=0){
        return 0;
    }
    let sum =0;

    for (let i=0; i<=num; i++){
         sum +=i;
    }
 return sum
}

