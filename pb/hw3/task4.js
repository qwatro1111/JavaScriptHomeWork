function f (dayNumber) {
    let week = {
        1: 'Воскресенье',
        2: 'Понедельник',
        3: 'Вторник',
        4: 'Среда',
        5: 'Четверг',
        6: 'Пятница',
        7: 'Суббота'
    }
    if (typeof dayNumber !== 'number') {
        return 'Error: parameter type is not a Number';
    }
    if (dayNumber < 1 || dayNumber > 7) {
        return 'Error: parameter should be in the range of 1 to 7';
    }

    return week[dayNumber];
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));