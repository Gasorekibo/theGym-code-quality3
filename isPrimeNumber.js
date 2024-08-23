function isPrimeNumber(number) {
  if (number <= 1 || number % 2 === 0) return false;
  if (number === 2) return true;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(2));
