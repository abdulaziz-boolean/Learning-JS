class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hoby(hobbies) {
    console.log(`my hobi is ${hobbies}`);
  }
}

const aziz = new Student("abdulaziz", 22);

console.log(aziz);
console.log(aziz.hoby("coding"));
