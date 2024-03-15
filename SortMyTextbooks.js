// ['Algebra', 'History', 'Geometry', 'English']),
// ['Algebra', 'English', 'Geometry', 'History']);


function sorter(arr) {
    return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}


function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        // Приводим строки к нижнему регистру для учета регистра
        const lowerA = a.toLowerCase();
        const lowerB = b.toLowerCase();

        // Сравниваем строки с учетом специальных символов
        if (lowerA < lowerB) return -1;
        if (lowerA > lowerB) return 1;

        // Если строки равны, возвращаем 0
        return 0;
    });
}
