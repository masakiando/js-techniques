// Delete items from array
// /#JP: 配列からアイテムを削除する


const nums1 = [33, 44, 55];
const removedValue1 = nums1.slice(1, 2);
console.log('removedValue1', removedValue1);
console.log('nums1', nums1);

const nums2 = [33, 44, 55];
const removedValue2 = nums2.splice(1, 1);
console.log('removedValue2', removedValue2);
console.log('nums2', nums2);

const nums = [33, 44, 55];
const removedValue = nums.splice(1, 1, 'new item', 'another item', 'third');
console.log('removedValue2', removedValue);
console.log('nums2', nums);

const str = 'hello world'.split('');
str.splice(0, 1);
str.splice(str.length - 1, 1);
console.log(str.join(''));

const ints = [4, 5, 6];

// var result = ints.filter(el => el > 4).map(el => {
//   ints.splice(ints.indexOf(el), 1);
//   return el;
// });
// console.log(result);
// console.log(ints);

function removeItems(arr, fn) {
  return arr.filter(fn).map((el) => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

const res = removeItems(ints, (num) => num > 5);
console.log(res);
console.log(ints);


// splice とは【意味】解いて組み継ぎする
