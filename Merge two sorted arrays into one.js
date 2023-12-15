// Merge two sorted arrays into one

// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function mergeArrays(arr1, arr2) {

    let arr = [...arr1, ...arr2]


    arr = arr.sort (function (a,b) {
        return a -b
    })

    let uniqueArr = arr.filter((value,index,self) =>{
        return self.indexOf(value) === index
    })

    return uniqueArr
}



function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1,...arr2])).sort((a,b)=>a-b);
}