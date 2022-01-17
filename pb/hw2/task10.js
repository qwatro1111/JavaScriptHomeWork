var arr = [6,5,4,3,2,1], arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    for (var j = 0; j < arrLength - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}

console.log(arr);