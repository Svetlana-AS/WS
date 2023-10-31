// Write a function that merges two sorted arrays into a single one.
//     The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


function mergeArrays(a, b) {
    const Array = [...a,...b]
    Array.sort((v,s)=>v-s)

    const count ={};
    const uniqueArray = Array.filter((item)=>{
        if(count[item]){
            count[item]++;
            return false;
        }else {
            count[item] =1;
            return true;
        }
    })
    return uniqueArray
}


const mergeArrays = (a, b) => [...new Set([...a, ...b].sort((a, b) => a - b))];