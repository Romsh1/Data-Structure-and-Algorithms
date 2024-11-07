function binarySearch(t) {
    let arr = [-5, 2, 4, 6, 10];
    let left_index = 0;
    let right_index = arr.length - 1;
    while (left_index <= right_index) {
        let middle_index = Math.floor((left_index + right_index) / 2);
        if (t === arr[middle_index]) {
            return middle_index
        }
        if (t < arr[middle_index]) {
            right_index = middle_index - 1;
        } else {
            left_index = middle_index + 1;
        }
    }
    return -1
}
console.log(binarySearch(6));
console.log(binarySearch(20));
