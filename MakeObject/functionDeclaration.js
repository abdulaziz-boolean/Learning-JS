function Student(name, age) {
  let student = {};

  student.name = name;
  student.age = age;
  student.hobi = function (hobbies) {
    console.log(`my hobi is ${hobbies}`);
  };

  return student;
}

let abdulaziz = Student("abdulaziz", "22");
console.log(abdulaziz);
console.log(abdulaziz.hobi("coding"));

let azizah = Student("azizah", "20");
console.log(azizah);
console.log(azizah.hobi("design"));
