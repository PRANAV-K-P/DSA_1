const rotate = (nums, k) => {
  if (k > nums.length) {
    for (let i = 0; i < k; i++) {
      let value = nums.pop();
      nums.unshift(value);
    }
  } else {
    let value = nums.splice(-k, k);
    nums.unshift(...value);
  }
  return nums;
};
console.log(rotate([1, 2, 3, 7, 4], 3));
