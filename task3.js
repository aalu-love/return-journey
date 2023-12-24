const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 2, 1, 9, 10];

function commaonElement(arr1, arr2) {
  let common = [];
  for (let i of arr1) {
    if (arr2.includes(i)) {
      common.push(i);
    }
  }
  return common;
}

const common = commaonElement(arr1, arr2);
console.log(common);
