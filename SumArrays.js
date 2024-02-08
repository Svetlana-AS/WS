// Sum Arrays


function sum (numbers) {
    return numbers.reduce((sum,el) => sum+el, 0)
}



function positiveSum(arr) {
    return arr.reduce((sum, el) => el >0 ? sum + el : sum, 0)
}