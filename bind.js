let person = {
    // Property / Attribute
  name: "Fauzi",

    // Method / Function / Behavior
  hi() {
    console.log(this.name);
    this.hello();
  },

  hello() {
    console.log(`Hello, ${this.name}`);
  }
};

let hiLuar = person.hi.bind(person);
hiLuar();
