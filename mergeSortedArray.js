
// two sorted integer arrays nums1 and nums2
// merge nums2 into nums1 as one sorted array

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort((x, y) => x - y);
    
};
