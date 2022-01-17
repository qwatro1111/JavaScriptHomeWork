var arr = [1,2,3,4,5,6], arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    for (var j = 0; j < arrLength - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}

console.log(arr);