const greet = () => console.log("Hello World");
greet();

const greeting = (name, time) => {
  console.log(`hello ${name}, good ${time}`);
};
greeting("azizah", "morning");

const students = ["abdulaziz", "azizah", "ronaldo"];
const countStudent = students.map((student) => ({
  name: student,
  count: student.length,
}));

console.table(countStudent);
