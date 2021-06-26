<h1> Different way to make objects </h1>

# Object Literal

```
let Student = {
  name: "Abdul Aziz",
  age: 22,
  hoby: function (hobbies) {
    console.log(`my hobi ${hobbies}`);
  },
};
let Student2 = {
  name: "Azizah",
  age: 20,
  hoby: function (hobbies) {
    console.log(`my hobi ${hobbies}`);
  },
};

console.log(Student.hoby("coding"));
console.log(Student2.hoby("design"));

```

# Function Declaration

```
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
```

# Constructor Function

<p style="color: red">add new keyword</p>

```
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.hobi = function (hobbies) {
    console.log(`${this.name} like ${hobbies}`);
  };
}

let abdulaziz = new Student("abdulaziz", "22");
console.log(abdulaziz);
console.log(abdulaziz.hobi("coding"));

let azizah = new Student("azizah", "20");
console.log(azizah);
console.log(azizah.hobi("design"));

```
