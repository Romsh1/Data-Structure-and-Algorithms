function factorial(n) {
    let prod = 1;
    for (let i = n; i > 0; i--) {
        prod *= i;
    }
    return prod;
}
console.log(factorial(5));
console.log(factorial(10));