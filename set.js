const set = new Set([1, 2, 3])
set.add(5);
console.log(set.size);
console.log(set.has(5));
set.delete(5);
console.log(set.size);
set.clear()

for (const s of set) {
    console.log(s);
}