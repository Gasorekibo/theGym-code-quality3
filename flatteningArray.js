const returnArrayNestedLevel = (array) => {
  if (!Array.isArray(array)) return 0;
  return 1 + Math.max(...array.map(returnArrayNestedLevel));
};

const flatteningArray = (arr) => arr.flat(returnArrayNestedLevel(arr));
