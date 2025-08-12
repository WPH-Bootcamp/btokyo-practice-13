let animal = { eat: true };
let cat = Object.create(animal);
let cat2 = animal;

// different cat and cat2
console.log(cat.eat); // true
console.log(cat2.eat); // true
console.log(cat === cat2); // false
console.log(cat.hasOwnProperty('eat')); // false
console.log(cat2.hasOwnProperty('eat')); // true