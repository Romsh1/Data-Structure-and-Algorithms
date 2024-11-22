const person = {
    name: 'Bob',
    age: 27,
    greeting: function() {
        console.log(`Hi ${this.name}`);
    }
}
person.address = 'Lakeshore';
delete person.address;
console.log(person);
console.log(person.name);
console.log(person['age']);

person.greeting();