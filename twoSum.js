function twoSum(nums, target) {
    const myObj = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (myObj.hasOwnProperty(complement)) {
            return [myObj[complement], i];
        }
        myObj[num] = i;
    }
    return [];
}

console.log(twoSum([5, 9, 1, 4, 5, 6, 3], 4));