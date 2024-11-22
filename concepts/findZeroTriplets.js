function findTriplets(myArr) {
let found = false;
    for (let i = 0; i < myArr.length - 2; i++) {
        for (j = 0; j < myArr.length - 1; j++) {
            for (k = 0; k < myArr.length; k++) {
                if (myArr[i] + myArr[j] + myArr[k] === 0) {
                    console.log(myArr[i], myArr[j], myArr[k]);
                    found = true;
                }
            }
        }
    }
    if (!found) {
        console.log("No triplets");
    }
}
let arr = [0, 1, 2, -1, 3];
findTriplets(arr);
let arr2 = [1, 2, 3, 4, 5];
findTriplets(arr2);