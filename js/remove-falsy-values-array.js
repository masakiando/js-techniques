// Remove falsy values from array
// / #JP: 配列から偽の値を削除する

var temps = [72, 68, 65, undefined, 80, 0, NaN, "", null];

var newTemps = temps.filter(temp => Boolean(temp));
console.log(newTemps);

// Falsy values = values which, when converted to a boolean always become false
// Five falsy values in JS = '', 0, null, undefined, NaN
