// Prevent object properties from being added/deleted
// オブジェクトのプロパティが追加/削除されないようにします

var user = {
  name: "john",
  email: "john@gmail.com"
};

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "john@gmail.com", writable: true, enumerable: true, configurable: false},
//   name: {value: "john", writable: true, enumerable: true, configurable: false}
// }

Object.seal(user);

user.password = "john";
// "john"

Object.isSealed(user);
// true

delete user.name;
// false

console.log('user', user);

const key = 'hoge';
const obj = {
  [key]: 1,
};
console.log('obj', obj);
