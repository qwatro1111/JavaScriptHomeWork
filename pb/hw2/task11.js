var arr = [2, 5, 9, 15, 0, 4], min = 3, max = 10, arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    if ( min < arr[i] && arr[i] < max ) {
        console.log(arr[i]);
    }
}