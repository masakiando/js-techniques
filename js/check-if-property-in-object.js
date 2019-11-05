// Check if a property exists in object

const user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'New York',
  },
};

// var property = 'name' in user;

const property = user.address.hasOwnProperty('street');
console.log(property); // true


/**
 * Check if a property exists in object
 * / #JP: オブジェクトにプロパティが存在するかどうかを確認します
 * @param {object} obj - オブジェクトの引数
 * @return {boolean} 真偽値を返す
 */
const checkPropertyExistsInObject = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
console.log(checkPropertyExistsInObject(user, 'address'));
