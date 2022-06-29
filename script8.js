let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function search(nums, target) {
   let start = 0;
   let end = nums.length - 1;
   let mid;

   for (let i = 0; i < nums.length; i++) {
      mid = Math.round((end - start) / 2) + start;
      if (target === nums[mid]) return mid;
      if (target < nums[mid]) end = mid - 1;
      if (target > nums[mid]) start = mid + 1;
   }
   return -1;
}

console.log(search(arr, 8));
