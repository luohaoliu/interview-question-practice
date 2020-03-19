
// an array of integers, return indices of the two numbers such that they add up to a specific target

// assume that each input would have exactly one solution, may not use the same element twice

// example

// given nums = [2, 7, 11, 15], target = 9,

// because nums[0] + nums[1] = 2 + 7 = 9,

// return [0, 1].

const twoSum = (nums, target) => {

  const map = {};

  for (let i = 0; i < nums.length; i++) {
  
    const another = target - nums[i];

    if (another in map) {
    
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
