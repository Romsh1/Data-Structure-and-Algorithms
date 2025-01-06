


// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let leftArr = []
//     let rightArr = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < pivot) {
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
// }



function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let n = arr.length - 1;
    let pivot = arr[n];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));



/* GeeksforGeeks */
/*
    Quick sort when low and high are given as params
*/

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */

class Solution {
    partition(arr, low, high) {
        // Your code here
        let pivot = arr[high];
        
        //starting index for i from -1
        let i = low - 1;
        
        //traversing through each element
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                //swapping
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1; //returning index
        
    }
    

    quickSort(arr, low, high) {
        if (low < high) {

        // pi is the partition return index of pivot
        let pi = this.partition(arr, low, high);

        this.quickSort(arr, low, pi - 1);
        this.quickSort(arr, pi + 1, high);
        }
    }

}