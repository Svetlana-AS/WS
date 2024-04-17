// Reagent Formula

// We know the rules of confect:
// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Example
// For formula = [1,3,7], The output should be true.
//
// For formula = [7,1,2,3], The output should be false.


isValid = formula => !(formula.includes(1) && formula.includes(2))
    && !(formula.includes(3) && formula.includes(4))
    && (formula.includes(5) == formula.includes(6))
    && (formula.includes(7) || formula.includes(8))

//вариант 2
function isValid(formula) {
    const has = formula.includes.bind(formula);

    return (
        !(has(1) && has(2)) &&
        !(has(3) && has(4)) &&
        (has(5) === has(6)) &&
        (has(7) || has(8))
    );
}