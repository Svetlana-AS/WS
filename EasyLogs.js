
// Given a logarithm base X and two values A and B, return a sum of logratihms with the base
// X:log x A + log X B
function logs(x,a,b){
    // Используем формулу log_a(b) + log_a(c) = log_a(b * c)
    return Math.log(a*b)/Math.log(x)
}