const commonFactors = (a, b) => {
  let count = 0;
  const lowest = a < b ? a : b;
  for (let i = 1; i <= lowest; i++) {
    if (a % i === 0 && b % i === 0) count++;
  }
  return count;
};
console.log(commonFactors(12, 6));
