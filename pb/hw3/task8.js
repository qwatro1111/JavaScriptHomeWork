function f(arr, pos = 0) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }

    if (arr.length === 0) {
        console.log('Error: parameter can\'t be an empty');
        return;
    }

    console.log(arr[pos]);
    pos++;
    if (typeof arr[pos] !== "undefined") {
        f(arr, pos);
    }
}

f([1,2,3]);
f(1,2,3);
f('Content');
f([]);