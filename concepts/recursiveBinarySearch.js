function recursiveBinarySearch(arr, t) {
    return Search(arr, t, 0, arr.length - 1);
}

function Search(arr, t, left_index, right_index) {
    if (left_index > right_index) {
        return -1
    }

    let middle_index = Math.floor((left_index + right_index) / 2);
    if (t === arr[middle_index]) {
        return middle_index
    }

    if (t < arr[middle_index]) {
        return Search(arr, t, left_index, middle_index - 1)
    }
    else {
        return Search(arr, t, left_index + 1, right_index)
    }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));