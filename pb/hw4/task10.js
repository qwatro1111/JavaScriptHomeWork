function reverse(arr) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }
    var start = 0,
        end = arr.length - 1;
    while (start < end) {
        var result = arr[start];
        arr[start] = arr[end];
        arr[end] = result;
        start++;
        end--;
    }
}

const arr = [3,2,1];
reverse(arr);
console.log(arr);