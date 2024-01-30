
// Sum without highest and lowest number
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array,
//     or the given array is an empty list or a list with only 1 element, return 0.



function sumArray(array) {
    if (array === null || array === undefined || array.length <= 2) return 0;

    // Find the highest and lowest values
    const highest = Math.max(...array);
    const lowest = Math.min(...array);

    let sum = 0;

    // Flags to track if highest and lowest have been found
    let foundHighest = false;
    let foundLowest = false;

    // Sum all elements excluding duplicates of the highest and lowest
    for (let i = 0; i < array.length; i++) {
        if (array[i] === highest && !foundHighest) {
            foundHighest = true;
        } else if (array[i] === lowest && !foundLowest) {
            foundLowest = true;
        } else {
            sum += array[i];
        }
    }

    return sum;
}

// Example usage
console.log(sumArray([0, 1, 6, 10, 10]));  // Output: 17


