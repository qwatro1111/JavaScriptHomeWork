var arr = [1,2,3,-5,-2,1,-4], min = 0, sum = 0, arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    if ( min < arr[i] ) {
        sum += arr[i];
    }
}

console.log(sum);