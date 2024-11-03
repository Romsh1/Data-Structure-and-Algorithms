let myArr = [3, 2, 4, 1];

function findMaxMin(myArr) {
    let max = myArr[0];
    let min = myArr[0];
    for(let i = 0; i < myArr.length; i++) {
        if (myArr[i] > max) {
            max = myArr[i];
        } else if (myArr[i] < min) {
            min = myArr[i];
        }
    }
    return [max, min];
}
console.log(findMaxMin(myArr));