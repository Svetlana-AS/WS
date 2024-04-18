
// Remove the time
// Input
// Input will always be a string, e.g., "Friday May 2, 7pm".
//
//     Output
// Output will be the shortened string, e.g., "Friday May 2".


// function shortenToDate(longDate){
//     let shortDate = longDate.split(',')[0];
//     return shortDate
// }

function shortenToDate(longDate) {
    const [day,date, time] = longDate.split(',');
    return  date;
}

// longDate.split(','): Этот метод разбивает длинную строку longDate на массив строк, используя запятую
// в качестве разделителя. Например, если longDate равно "Пятница, 2 мая 2024 года, 15:30", то после
// этой операции мы получим массив ["Пятница", "2 мая 2024 года", "15:30"].
//     [0]: Здесь используется индекс [0], чтобы получить только первый элемент этого массива, то
// есть строку "Пятница". Этот элемент содержит дату без времени.
//     return shortDate;: Эта строка возвращает полученную короткую дату из функции.
//     Таким образом, в результате работы этой части кода из строки "Пятница, 2 мая 2024 года, 15:30"
// будет извлечена только дата "Пятница, 2 мая 2024 года", без времени.

console.log(shortenToDate("Пятница, 2 мая 2024 года, 15:30"))