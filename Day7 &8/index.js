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
