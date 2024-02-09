// Find out whether the shape is a cube
// volume = Length * Width * Height
// Return true if the cuboid could have equal sides, return false otherwise.
// cubeChecker(  8, 2), true )
// cubeChecker( -8,-2), false)
// cubeChecker(  0, 0), false)



function cubeChecker1 (volume, side){
    if (volume<=0 || side <= 0 ){
        return false
    }
    if (Math.pow(side,3)===volume){
        return true;
    }else {
        return false
    }

}

function cubeChecker2 (volume, side){
    if (volume<=0 || side <= 0 ){
        return false
    }
    return Math.pow(side,3)===volume ? true:false

}

function cubeChecker3 (volume, side){
    return side > 0  ? volume === side**3 : false;
};