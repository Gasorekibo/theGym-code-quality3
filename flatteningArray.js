function returnArrayNestedLevel(arr) {
  let nestedCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 1) {
      returnArrayNestedLevel(arr[i]);
      nestedCount++;
    }
  }
  return nestedCount;
}

const flatteningArray = (arr) => arr.flat(returnArrayNestedLevel(arr));
