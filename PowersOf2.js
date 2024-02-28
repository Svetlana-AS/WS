// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    let result = []
    for (let i=0; i<=n; i++){
        result.push(2**i)
    }
 return result
}




function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
}



//     function powersOfTwo(n) { ... }: Это объявление функции powersOfTwo, которая принимает один аргумент n.
//
// Array(n + 1): Создаётся новый массив длиной n + 1. Array(n + 1) создаёт массив с пустыми слотами.
//     Эти слоты будут заполнены значениями в следующем шаге.
//
//     [...Array(n + 1)]: Синтаксис ... (spread оператор) разворачивает созданный массив в виде аргументов,
//     превращая его в реальный массив с пустыми слотами.
//
//     .map((_, i) => 2 ** i): Метод .map() применяется к каждому элементу массива, где первый аргумент
// _ игнорируется (не используется), а второй аргумент i представляет текущий индекс элемента в массиве. Функция
//     стрелка => возвращает значение 2 ** i, то есть каждый элемент массива будет равен двойке в степени его собственного индекса.
//
//     return: Возвращает полученный массив, содержащий степени двойки от 0 до n.
//
//     Таким образом, функция powersOfTwo создаёт массив, содержащий степени двойки от 0 до n.