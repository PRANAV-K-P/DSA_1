const containsDuplicate = (nums) => {
  const value = new Set(nums);
  if (value.size === nums.length) {
    return false;
  }
  return true;
};
console.log(containsDuplicate([4, 5, 2, 1, 0, 6, 0, 9, 9, 8]));
