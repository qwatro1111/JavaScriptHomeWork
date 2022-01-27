function reduce(arr, func, acc) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }
    if (typeof func !== 'function') {
        console.log('Error: parameter type should be an function');
        return;
    }

    if (typeof acc !== 'string' && typeof acc !== 'number') {
        console.log('Error: parameter type should be an string or number');
        return;
    }


    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        acc = func(acc, arr[i], i, arr);
    }

    return acc;
}

const arr = [1,2,3,4,5];
const acc = 0;

var result = reduce(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc);
console.log(result);