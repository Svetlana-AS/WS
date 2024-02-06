// Invert values
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]



function invert(array) {

    return array.map(el=> el<0 ? el*-1 : el*-1)

}

function invert(array) {
    return array.map(el => -el);
}

// Invert values
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]