
// Your task is to find the nearest square number, nearest_sq(n)
// or nearestSq(n), of a positive integer n.
//
// (1), 1, "nearestSq(1) = 1");
// assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
// assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
// assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
// assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");


function nearestSq(n){
    const squareNum = Math.sqrt(n);
    return Math.pow(Math.round(squareNum), 2);
}

// Math.ceil(squareNum): Эта часть кода использует функцию Math.ceil(), которая округляет
// число вверх до ближайшего целого числа. squareNum - это квадратный корень числа n, который мы вычислили ранее.
//
// Math.pow(x, y): Это функция, которая возводит число x в степень y. В данном случае
// x - это результат округления квадратного корня числа n, а y - это 2, так как мы хотим возвести его в квадрат.
//
//     Таким образом, выражение Math.pow(Math.ceil(squareNum), 2) берет квадратный корень числа n,
//     округляет его вверх до ближайшего целого числа и затем возводит результат в квадрат, чтобы
// получить ближайший больший квадрат. Это делается для случаев, когда квадратный корень не является целым числом.

