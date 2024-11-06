function powerOfTwo(n) {
    if(n < 1) {
        return false
    }
    for(let i = 1; i <= n; i++) {
        if(2 ** i === n) {
            return true
        }
    }
    return false
}
console.log(powerOfTwo(23));
console.log(powerOfTwo(8));
console.log(powerOfTwo(100));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));
console.log(powerOfTwo(32));
console.log(powerOfTwo(47));