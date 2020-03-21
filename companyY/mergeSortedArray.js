
// two sorted integer arrays nums1 and nums2
// merge nums2 into nums1 as one sorted array

// the number of elements initialized in nums1 and nums2 are m and n respectively
// assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort((x, y) => x - y);
    
};
