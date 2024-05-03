
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
const logicalCalc = (array, op) =>
    array.reduce((a, b) =>
        op === 'AND' ? a && b : op === 'OR' ? a || b : a !== b
    );