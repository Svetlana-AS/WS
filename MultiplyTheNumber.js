
// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
// 0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)

function multiply(number){
    return number*5**String(Math.abs(number)).length
}