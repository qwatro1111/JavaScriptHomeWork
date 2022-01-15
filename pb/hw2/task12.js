var arr = [1,2,3,-5,-2,1,-4], min = 0, sum = 0;

for (var i = 0; i < arr.length; i++) {
    if ( min < arr[i] ) {
        sum += arr[i];
    }
}

console.log(sum);