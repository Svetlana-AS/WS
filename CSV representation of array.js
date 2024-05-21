
// [ -25, 21, 2, -33, 48 ],
//     [ 30,31,-32,33,-34 ]
// ] ), '-25,21,2,-33,48\n30,31,-32,33,-34');


function toCsvText(array) {
    return [...array].map(el=>el+'\n').join('').trim()
}


function  toCsvText(array) {
    return array.join('\n');
}