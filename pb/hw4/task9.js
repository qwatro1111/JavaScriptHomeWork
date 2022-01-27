function arrayFill(parameter, counter) {
    if (typeof parameter !== 'string'
        && typeof parameter !== 'number'
        && typeof parameter !== 'object')
    {
        console.log('Error: parameter type must be number, string, object or array');
        return;
    }
    if (typeof counter !== 'number') {
        console.log('Error: parameter type should be an number');
        return;
    }



    var array = [];
    for (var i = 0; i < counter; i++) {
        array.push(parameter);
    }

    return array;
}

var result = arrayFill('x',5);

console.log(result);