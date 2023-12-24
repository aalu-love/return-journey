function findUniqueElements(arr) {
  let uniqueArray = [];
  for (let i of arr) {
    if (uniqueArray.includes(i)) {
      continue;
    } else {
      uniqueArray.push(i);
    }
  }
  return uniqueArray;
}

var inputArray = [1, 2, 3, 4, 2, 3, 5];
var result = findUniqueElements(inputArray);
console.log(result);
