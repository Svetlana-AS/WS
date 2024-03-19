
// (37) === false)
// ('37') === false)
// (NaN) === true)
// (undefined) === false)

const isReallyNaN = (val) => {
    return Number.isNaN(val)
}

// Проверка  значения NaN (Not a Number).
// Проблема с использованием прямого сравнения val === NaN заключается в том, что в JavaScript NaN не равно самому себе,
//     поэтому это сравнение всегда будет давать false. Вместо этого мы используем метод Number.isNaN(), который корректно
// определяет, является ли значение NaN.