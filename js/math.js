//
function RandomInt(min,max) {
    return Math.floor (Math.random() * (max - min) + min);
}

//
function Media(N1,N2) {
    return (N1,N2)/2
}

module.exports ={
    RandomInt:RandomInt,
    Media:Media,
}