// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// вариант 1
function getSize(w,h,d){
    let Array = []

   let area = 2*d*w+2*d*h+2*w*h
    Array.push(area)

    let volume = w*h*d
    Array.push(volume)

    return Array
}

// вариант 2
function getSize(w, h, d){
    const area = (2*d*h) + (2*w*h) + (2*d*w);
    const volume = d*w*h;
    return [area, volume];
}

// вариант 3
const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
];
