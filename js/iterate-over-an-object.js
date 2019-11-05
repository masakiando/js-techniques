// Iterating over an object

// var username = {
//   first: "John",
//   last: "Doe"
// };

// for (let u in username) {
//   if (username.hasOwnProperty(u)) {
//     console.log(u, username[u]);
//   }
// }

// for (let u of Object.keys(username)) {
//   console.log(u, username[u]); // first John, last Doe
// }

const username = {
  first: 'John',
  last: 'Doe',
};

/**
 * Iterating over an object
 * / #JP: オブジェクトの繰り返し
 * @param {object} obj - オブジェクトの引数
 * @example
 * Object.entries(username)
 *   .forEach(([key, value]) => console.log(key, value)); // first John, last Doe
 */
Object.entries(username).forEach(([key, value]) => console.log(key, value));
