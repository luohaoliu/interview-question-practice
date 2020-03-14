
function twoSum(arr, num) {

  var sumArr = [];

  for (var i = 0; i < arr.length; i++) { 

    for (var j = i + 1; j < arr.length; j++) {

      if (arr[i] + arr[j] === num) {
        sumArr.push([arr[i], arr[j]]);
        
      }
    }
  }

  return sumArr;
}
