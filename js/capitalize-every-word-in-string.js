/**
 * Capitalize every word in string
 * / #JP: 文字列内のすべての単語の先頭文字を大文字にします
 * @param {string} str - 文字列の引数
 * @return {string} 文字列を返す
 * @example
 * console.log(capitalizeWords('hello world')); => Hello World
 */
const capitalizeWords = (str) => str
  .split(' ')
  .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
  .join(' ');
console.log(capitalizeWords('hello world'));
