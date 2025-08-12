const biodata = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  skills: ["JavaScript", "Python", "React"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// Kode -> Json Object -> stringify() -> Json String -> API

// API -> Json String -> parse() -> Json Object -> Output

// Object to JSON string
const jsonString = JSON.stringify(biodata);

// JSON string to Object
const jsonObject = JSON.parse(jsonString);

console.log(typeof jsonObject);