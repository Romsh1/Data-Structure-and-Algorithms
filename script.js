const myObj = {
    name: 'John',
    age: 20,
    city: 'Lucknow'
}
console.log(myObj);
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));
console.log(Object.hasOwnProperty('name'));

/* Big-O Exercises Time Complexity */
function beginnerExample1(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
beginnerExample1([1,2,3,4,5]);

function beginnerExample2(arr) {
    console.log(arr[0]);
}
beginnerExample2([1,2,3,4,5]);

function beginnerExample3(arr) {
    console.log(arr[0]);
    console.log(arr[1]);
}
beginnerExample3([1,2,3,4,5]);

function intermediateExample1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
intermediateExample1([1,2,3,4,5]);

