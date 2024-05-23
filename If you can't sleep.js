// If you can't sleep, just count sheep!!

// 2  "1 sheep...2 sheep..."

const countSheep = function (num){
    const sum =[]
    if (num === 0 ){
        return ""
    }else{
        for (let i=1; i<=num; i++){
            sum.push(i+"sheep...")
        }
        return sum.join('')
    }

}


// num===2  "1 sheep...2 sheep..."

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}
