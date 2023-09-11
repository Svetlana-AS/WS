// Write a function which calculates the average of the numbers in a given list.

function countSheeps(arrayOfSheep) {
    let sum = 0
    arrayOfSheep.map(el=> {
        if(el=== true){
            sum++;
        }
    })
    return sum;
}