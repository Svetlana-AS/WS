// Rock Paper Scissors!

const rps = (p1, p2) => {

    if ((p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'rock' && p2 === 'scissors')) {
        return 'Player 1 won!';
    } else if ((p1 === 'paper' && p2 === 'scissors') ||
        (p1 === 'rock' && p2 === 'paper') ||
        (p1 === 'scissors' && p2 === 'rock')) {
        return 'Player 2 won!';
    } else if (p1 === p2) {
        return 'Draw!'
    }

}

const rps = (p1, p2) => {
   const rules = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (p1 === p2) {
        return 'Draw!';
    } else {
        return 'Player ' + (rules[p1] === p2 ? 1 : 2) + ' won!';
    }
};

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {git
        return "Player 2 won!";
    }
};