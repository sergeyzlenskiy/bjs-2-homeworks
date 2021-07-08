function compareArrays(arr1, arr2) {
  let result;
  
  // Ваш код
  if (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0);
  resultArr = resultArr.filter((item) => item % 3 === 0).map((item, idx) => item * 10);
  // Ваш код

  return resultArr; // array
}
