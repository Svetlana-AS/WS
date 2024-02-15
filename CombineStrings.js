// Combine strings function

// Combine strings function
// 'James Stevens'


const combineNames = (name,surname) =>{
    return  `${name} ${surname}`
}


// вариант 2:


const combineNames = (...names) => names.join(' ');