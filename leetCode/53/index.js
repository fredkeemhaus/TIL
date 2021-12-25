/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function (nums) {
  // 이전값이 음수면, 현재의 값에 더하지 않는다.
  // 양수일 때만, 현재 값에 더해서 저장한다. (최대 sum을 구하기 위해서)
    
  nums.forEach((value, index) => {
    if (nums[index-1] > 0) nums[index] = value + nums[index-1]; 
  });
  
  return Math.max(...nums); // spread syntax 로 배열의 가장 큰 값 return 하기
};
