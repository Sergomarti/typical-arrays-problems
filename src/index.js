
exports.min = function min (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else{
        var len = array.length, min = Infinity;
        while (len--) {
            if (array[len] < min) {
                min = array[len];
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else{
        var len = array.length, max = -Infinity;
        while (len--) {
            if (array[len] > max) {
                max = array[len];
            }
        }
        return max;
    }
}


exports.avg = function avg (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else{
    return array.reduce((a, b) => (a + b)) / array.length;
    }
}
