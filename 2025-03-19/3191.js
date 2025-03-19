/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      operations++;
    }
  }
  return nums[nums.length - 1] === 1 && nums[nums.length - 2] === 1
    ? operations
    : -1;
};
console.log(minOperations([0, 1, 1, 1, 0, 0,0, 1, 1, 1, 0, 0]));
