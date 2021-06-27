const methodStudent = {
  hoby: function (hobbies) {
    console.log(`my hobi is ${hobbies}`);
  },
  address: function (village) {
    console.log(`I live in ${village}`);
  },
};

function Student(name, age) {
  student = Object.create(methodStudent);
  student.name = name;
  student.age = age;
  return student;
}

const aziz = new Student("abdulaziz", 22);
console.log(aziz.hoby("coding"));
