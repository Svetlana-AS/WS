// Find the Difference in Age between Oldest and Youngest Family Members


// [82, 15, 6, 38, 35]), [6, 82, 76]


function differenceInAges(ages){
let young = Math.min(...ages)
let old = Math.max( ...ages)
let  difference = old - young

 return [young, old, difference]

}