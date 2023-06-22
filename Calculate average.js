// Write a function which calculates the average of the numbers in a given list.

function findAverage (array){
    let sum=0
    for(let  i= 0; i<array.length; i++){
        sum += array[i]
    }
    const average = sum/array.length
    return average
}

