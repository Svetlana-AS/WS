

function fuelPrice(litres, pricePerLitre) {
    // Вычисляем скидку: 5 центов за каждые 2 литра
    let discountPerLitre = Math.floor(litres / 2) * 0.05;

    // Максимальная скидка не может превышать 25 центов
    if (discountPerLitre > 0.25) {
        discountPerLitre = 0.25;
    }

    // Итоговая стоимость с учетом скидки
    let totalCost = litres * (pricePerLitre - discountPerLitre);

    // Возвращаем итоговую стоимость, округленную до 2 знаков после запятой как число
    return parseFloat(totalCost.toFixed(2));
}