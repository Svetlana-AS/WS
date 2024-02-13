// Find Multiples of a Number
// Example : (2, 6), the function should return [2, 4, 6] as 2, 4, and 6


function findMultiples(integer, limit) {
    let arrayResult = []

    for (let i = integer; i<=limit; i+=integer)
        arrayResult.push(i)

    return arrayResult


}
