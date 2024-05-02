// The machine accepts a single coins or notes, and returns change in 20p
// and 10p coins. The machine will try to avoid returning its exact input,
//     but will otherwise return as few coins as possible. For example, a 50p
// piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.
//
//     The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p.




function changeMe(moneyIn){
  switch (moneyIn) {
    case '£5' : return '20p '.repeat(25).trim()
    case '£2' : return '20p '.repeat(10).trim()
    case '£1' : return '20p '.repeat(5).trim()
    case '50p' : return '20p 20p 10p '
    case '20p' : return '10p 10p '
    default:return moneyIn

  }
}