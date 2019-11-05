// Get length of object

const arr = [1, 2, 3];
console.log(arr); // 3

const hoge = { a: 1, b: 2, c: 3 };

const hogeLength = Object.keys(hoge).length;
console.log(hogeLength); // 3


/**
 * Get length of object
 * / #JP: オブジェクトの長さを取得
 * @param {object} obj - オブジェクトの引数
 * @return {numbar} 数値を返す
 */
const getObjectsLength = (obj) => Object.keys(obj).length;
console.log(getObjectsLength(hoge));
