function climbingStaircase(n) {
    const noOfWay = [1, 2]
    for (let i = 2; i <= n; i++) {
        noOfWay[i] = noOfWay[i - 1] + noOfWay[i - 2]
    }
    return noOfWay[n - 1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))