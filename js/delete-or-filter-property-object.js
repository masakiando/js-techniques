// Delete or filter a property from an object

const name = { first: 'John', middle: 'Bob', last: 'Doe' };

// delete name.last;
// console.log(name);

// function filterObj(obj, prop) {
//   const filteredObj = {};
//   Object.keys(obj)
//     .filter((k) => k !== prop)
//     .map((key) => (filteredObj[key] = obj[key]));
//   return filteredObj;
// }

/**
 * Delete or filter a property from an object
 * / #JP: オブジェクトからプロパティを削除またはフィルター処理する
 * @param {object} obj - オブジェクトの引数
 * @param {string} prop - オブジェクトの引数
 * @return {object} オブジェクトの引数
 * @example
 * console.log(filterObj(obj, ''last''); => { first: 'John', middle: 'Bob' };
 */
const filterObj = (obj, prop) => {
  const filteredObj = {};
  Object.keys(obj)
    .filter((k) => k !== prop)
    .map((key) => (filteredObj[key] = obj[key]));
  return filteredObj;
};
console.log(filterObj(name, 'last'));
// { first: 'John', middle: 'Bob' }
