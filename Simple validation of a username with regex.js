// Simple validation of a username with regex

 function validateUsr(username){
     // Проверка наличия символов
    if (!username) {
        return false
    }
     // Проверка длины имени пользователя
    if (username.length < 4 || username.length > 16){
        return false
    }
     // Проверка допустимых символов
    const validCharacters = /^[a-zA-Z0-9_]+$/
     if(!validCharacters.test(username)){
         return false
     }
     return true
 }


const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);