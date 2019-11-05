// Get a random element from an array
// /#JP 配列からランダムな要素を取得する

var ages = [12, 32, 98, 45, 38, 76];

ages[Math.round(Math.random() * ages.length)];
// 45