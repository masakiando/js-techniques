// Check if string contains substring
// / #JP: 文字列に部分文字列が含まれているかどうかを確認

const URL = "https://api.github.com/users/reedbarger";

URL.includes("github");
// true

URL.indexOf("reed") > -1;
// true

URL.startsWith("https");
// true

const containsWord = URL.endsWith("reedbarger");
console.log(containsWord); // true
