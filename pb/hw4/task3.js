function every(arr, func) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }
    if (typeof func !== 'function') {
        console.log('Error: parameter type should be an function');
        return;
    }
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        if (!func(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

const arr = [1,2,3];

var result = every(arr, function(item, i, arr) {
    return item >= 2;
});

console.log(result);

