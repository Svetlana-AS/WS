// Write a function that calculates the original product price, without VAT.
//
//     Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
//
// Thus, if your function receives 230.00 as input, it should return 200.00
//
// Notes:
//
//     VAT is always 15% for the purposes of this Kata.
//     Round the result to 2 decimal places.
//     If null value given then return -1
//

//return price without vat
function excludingVatPrice(finalPrice) {
    if (finalPrice === null) {
        return -1;
    }

    const originalPrice = finalPrice / 1.15; // Divide by 1.15 to remove 15% VAT
    return parseFloat(originalPrice.toFixed(2)); // Round to 2 decimal places
}

//Вариант 2

excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);