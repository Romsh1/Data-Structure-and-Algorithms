const arr = [1, 2, 2, 'bob']
arr.push(4);
arr.unshift(0);
arr.shift();
arr.pop();

for (const a of arr) {
    console.log(a);
}

console.log(arr);

