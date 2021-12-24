/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let numIndex = 0;
  if (nums.includes(target)) {
    numIndex = nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort((a, b) => a - b);
    numIndex = nums.indexOf(target);
  }
  return numIndex;
};
