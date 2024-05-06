


function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}


function NameMe(first, last) {
    return {
        firstName : first,
        lastName : last,
        name: first + ' ' + last
    }
}