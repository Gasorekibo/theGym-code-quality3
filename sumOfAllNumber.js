const sumAllNumberRecursively = (array) =>
  array.length === 0 ? 0 : array[0] + sumAllNumberRecursively(array.slice(1));
