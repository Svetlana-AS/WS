


function yearDays(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? `${year} has 366 days` : `${year} has 365 days`;
}

// Годы, которые делятся на 4 без остатка, являются високосными годами (например, 2004, 2008, 2012).
//     Однако не все годы, делящиеся на 100 без остатка, являются високосными. Например, 1900 год был вековым годом,
//     но не был високосным.
//     Тем не менее, годы, которые делятся на 400 без остатка, всегда являются високосными. Например, 2000 год был високосным.
//     Поэтому проверка year % 100 !== 0 и year % 400 === 0 используется, чтобы учесть эти случаи. Без этой
// проверки функция может неправильно определить високосный год, что приведет к неверным результатам.