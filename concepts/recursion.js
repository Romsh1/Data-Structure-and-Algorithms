function recursiveFibonacci(n) {
    const arr = [0, 1];
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(7));