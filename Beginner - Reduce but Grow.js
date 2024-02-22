// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
return x.reduce((sum,el) => sum* el,1)
}

const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i];
    }
    return res;
};


const grow=x=> x.reduce((a,b) => a*b)