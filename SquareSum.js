// For example, for [1, 2, 2] it should return 9 because


function squareSum(arr){
    let sum = 0
    for (let i=0; i< arr.length; i++){
        sum += arr[i]**2
    }
    return sum
}

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}