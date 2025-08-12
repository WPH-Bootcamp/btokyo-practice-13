// nonprimitif
// simpan multiple values in a single variable

// Jenis / tujuan datanya sama
const fruits = ["apple", "banana", "cherry"];

// Filter() 

// Filter
delete fruits[1]; // Delete
let fruitOuter = fruits;

// Delete
function deleteFruit(fruits, fruitToDelete) {
  let newFruits = [];
  for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    if (fruit === fruitToDelete) {
      continue;
    }
    newFruits.push(fruit);
  }
  return newFruits;
}

const vegetables = ["carrot", "broccoli", "spinach"];

// Jenis / tujuan data berbeda
const biodata = {
  name: "John Doe",
  age: 30,
  job: "Software Engineer",
  address: "Jakarta",
  hobbies: ["Reading", "Traveling", "Gaming"],
};

delete biodata.hobbies

console.log(biodata); // Read

biodata.nationality = "Indonesian";

const student1 = {
  name: "Alice",
  age: 20,
  major: "Computer Science",
  address: "Bandung",
};

const student2 = {
  age: 22,
  name: "Bob",
  address: "Surabaya",
  major: "Information Technology",
};

// plural and singular
const students = [student1, student2];

const student3 = {
  name: "Charlie",
  age: 21,
  major: "Data Science",
  address: "Yogyakarta",
};

students.push(student3);
students.pop();

// CRUD Array
// Create
// Read
// Update
// Delete
