function linearSearch(t) { //t is target
    myArr = [-5, 2, 10, 4, 6, 100];
    for (let i = 0; i < myArr.length; i++) {
        if(myArr[i] === t) {
            return i;
        }
    }
    return -1
}
console.log(linearSearch(10));
console.log(linearSearch(100));