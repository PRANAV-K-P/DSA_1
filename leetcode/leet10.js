const findLucky = (arr) => {
  const nums = new Set(arr);
  let count = 0,
    flag = 0,
    largest = 0;
  nums.forEach((item) => {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        count++;
      }
    }
    if (item === count) {
      flag = 1;
      if (largest < item) {
        largest = item;
      }
    }
    count = 0;
  });
  if (flag === 0) {
    return -1;
  }
  return largest;
};
console.log(findLucky([2, 3, 1, 3, 2, 2, 3, 4, 1, 4, 4, 4]));
