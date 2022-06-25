
var nums=[8,5,8]

nextPermutation = function (nums) {
    let pivot = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            pivot = i - 1;
            break;
        }
    }

    if (pivot === -1) {
        return nums.reverse();
    }
function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
    for (let i = nums.length - 1; i > pivot; i--) {
        if (nums[i] > nums[pivot]) {
            swap(nums, i, pivot);
            break;
        }
    }

    let start = pivot + 1;
    let end = nums.length - 1;

    while (start < end) {
        swap(nums, start, end);
        end--;
        start++;
    }
    return nums;
}
console.log(nextPermutation(nums))