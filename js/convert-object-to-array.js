// Convert object to array

const person = { name: 'Amy', age: 40 };

const arr = [];

Object.keys(person).forEach((key) => arr.push([key, person[key]]));

console.log(arr); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

const result = Object.keys(person).map((key) => [key, person[key]]);
console.log(result); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

console.log(Object.entries(person)); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

/**
 * Convert object to array
 * / #JP: オブジェクトを配列に変換
 * @param {object} obj - オブジェクトの引数
 * @return なし
 */
const convertObjectToArray = (obj) => Object.entries(obj);
console.log(convertObjectToArray(person));
