/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === 0) {
      if (nums[i + 1] !== undefined && nums[i + 2] !== undefined) {
        nums[i] = 1;
        nums[i + 1] = 1 - nums[i + 1];
        nums[i + 2] = 1 - nums[i + 2];
        operations++;
      } else {
        return -1;
      }
    }
  }
  return nums.includes(0) ? -1 : operations;
};
console.log(minOperations([0,1,1,1,0,0])); // ✅ Debe dar 3
