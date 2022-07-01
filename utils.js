
export function shuffle(array) {
    // Fischer Yates Inside Out Shuffle algorithm
    const shuffled = new Array(array.length);
    for (var i=0; i < array.length; i++) {
        var j = randomBetween(0, i);
        if (j != i) {
            shuffled[i] = shuffled[j];
        }
        shuffled[j] = array[i];
    }
    return shuffled;
}

export function randomBetween(inclusiveMin, exclusiveMax) {
    var offset = inclusiveMin;
    var range = exclusiveMax - inclusiveMin;
    var value = offset + Math.floor(range * Math.random());
    return value;
}