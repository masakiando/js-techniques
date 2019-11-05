// Get all values in object

var name = {
  first: "John",
  last: "Doe",
  age: 40
};

// var values = Object.keys(name).map(key => name[key]);
// console.log(values);

var values = Object.values(name);
console.log(values); // [ 'John', 'Doe', 40 ]

/**
 * Get all values in object
 * / #JP: オブジェクトのすべての値を取得
 * @param {object} obj - オブジェクトの引数
 * @return {array} 配列
 * @example
 * console.log(getObjectValues(obj, ''last''); => [ 'John', 'Doe', 40 ]
 */
const getObjectValues = (obj) => Object.values(obj);
console.log(getObjectValues(name));
// [ 'John', 'Doe', 40 ]
