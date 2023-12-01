

function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else {
        return 0; // Point lies on an axis or at the origin
    }
}


function quadrant(x, y) {
    return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
}