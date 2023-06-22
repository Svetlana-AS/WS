// Arrays Similar

// Write a function that determines whether the passed in arrays are similar.
// Similar means they contain the same elements, and the same number of occurrences of elements.

// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]


function arraysSimilar(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
}
