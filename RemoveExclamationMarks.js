// Write function RemoveExclamationMarks
// which removes all exclamation marks from a given string.
// "Hello World!"), "Hello World")



function removeExclamationMarks(str) {
    return [...str].filter(v=>v !=='!').join('')
}


function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
