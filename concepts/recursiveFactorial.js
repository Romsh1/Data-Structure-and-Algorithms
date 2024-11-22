function recursiveFactorial(n) {
    if (n === 0) {
        return 1 
    }
    return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(3)); //3*2*1 = 6
console.log(recursiveFactorial(5));