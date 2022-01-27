function filter(arr, func) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }
    if (typeof func !== 'function') {
        console.log('Error: parameter type should be an function');
        return;
    }
    var arrLength = arr.length,
        newArr = [];
    for (var i = 0; i < arrLength; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

const arr = [1,2,3];

var newArr = filter(arr, function(item, i, arr) {
    if (item % 2 === 0) {
        return true
    }
});

console.log(newArr)

