// Answer -1
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student));

// Answer -2
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log("before deleting", student);

delete student.rollno;

console.log(student);

// Answer -3
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(Object.keys(student).length);

// Answer -4
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

console.log(Object.values(library));

// Answer -5
