function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else if (mm === 40) {
        return "Your plant has had exactly the right amount of water for today!";
    } else {
        return "Your plant has had more than enough water for today!";
    }
}