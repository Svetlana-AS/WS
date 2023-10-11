

function neutralise(string1, string2) {
    let result = '';
    for (let i = 0; i<string1.length; i++){
        if(string1[i] === '+' && string2[i] === '+'){
            result += '+';
        }else if (string1==='-' && string2[i] === '-'){
            result +='-';
        }else {
            result +='0'
        }
    }
    return result;
}

function neutralise(s1, s2) {
    return [...s1].map((el, i) => el === s2[i] ? el : '0').join('');
}