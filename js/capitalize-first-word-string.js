// 文字列の最初の単語を大文字にします

// 'hello world' -> 'Hello world'

// function capitalize(str) {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

// var result = capitalize('hello world');
// console.log(result);

var capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join("")}`;

var result = capitalize("hello world");
console.log(result);
