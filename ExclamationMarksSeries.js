
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
    // Заменяем все гласные символы на восклицательные знаки
    return s.replace(/[aeiouAEIOU]/g, "!")

}
