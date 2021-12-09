/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// TEST CASE 1: 
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// TEST CASE 2: 
// Input: nums = [] 
// Output: []

// TEST CASE 3: 
// Input: nums = [0]
// Output: []


const threeSum = (nums) => {
  const n = nums.length;
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l++], nums[r--]]);
        // skip same number
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};
