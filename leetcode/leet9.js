const moveZeroes = (nums) => {
  let count = 0,
    i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      count++;
      nums.splice(i, 1);
    }
    if (nums[i] !== 0) {
      i++;
    }
  }
  for (let j = 0; j < count; j++) {
    nums.push(0);
  }
  console.log(nums);
};
moveZeroes([2, 0, 0, 1, 0]);
