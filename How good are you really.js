// /How good are you really






function betterThanAverage(classPoints, yourPoints) {
    let sum=0
    for (let i=0; i<classPoints.length; i++){
        sum +=classPoints[i]
    }
    const average = sum/classPoints.length

    return average<yourPoints ? true : false
}

