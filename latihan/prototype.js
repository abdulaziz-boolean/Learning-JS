function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.hoby = function (hobbies) {
  console.log(`my hobi is ${hobbies}`);
};

Student.prototype.address = function (village) {
  console.log(`i live in ${village}`);
};

const aziz = new Student("abdulaziz", 22);
console.log(aziz.hoby("coding"));
console.log(aziz.address("jeringo"));
