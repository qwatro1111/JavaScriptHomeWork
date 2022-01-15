var arr = [2, 5, 9, 15, 0, 4], min = 3, max = 10;

for (var i = 0; i < arr.length; i++) {
    if ( min < arr[i] && arr[i] < max ) {
        console.log(arr[i]);
    }
}