// Sum of positive
// Example [1,-4,7,12] => 1 + 7 + 12 = 20


function positiveSum(arr) {
    return arr.reduce((sum, el) => el >0 ? sum + el : sum, 0)
}