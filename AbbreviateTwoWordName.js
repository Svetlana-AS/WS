
// Abbreviate a Two Word Name

//
// Sam Harris => S.H
//
// patrick feeney => P.F




function abbrevName(name) {
    // Разделяем имя на массив слов по пробелу
    let words = name.split(' ');

    // Берем первую букву каждого слова и преобразуем ее в заглавную букву
    let initials = words.map(word => word.charAt(0).toUpperCase());

    // Объединяем инициалы с точкой между ними
    return initials.join('.');
}

// Вариант 2 короткий

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


// Вариант 3

function abbrevName(name){

    const nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}