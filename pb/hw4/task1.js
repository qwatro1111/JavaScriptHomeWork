function forEach(arr, func) {
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
        func(arr[i], i, arr);
    }
}

const arr = [1,2,3];

forEach(arr, function(item, i, arr) {
    console.log('item: ', item, '\n','i: ', i, '\n', 'arr: ', arr);
});
