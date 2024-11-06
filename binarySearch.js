function binarySearch(t) {
    let myArr = [-5, 2, 4, 6, 10];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] === t) {
            return i
        }
    }
    return -1
}
console.log(binarySearch(6));
console.log(binarySearch(20));