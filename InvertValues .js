// Invert values
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []


const invert = (array) => {
     return array.map(el=> el*-1)
}

const invert2= (array) => {
    return array.map(el=>-el)
}
