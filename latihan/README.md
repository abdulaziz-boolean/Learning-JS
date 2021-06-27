<h1> Object in javascript </h1>

### Object Literal

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

### Function Declaration

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

### Constructor Function

add `new` keyword

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

### Object Create

```

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

```

## prototype in javascript

```

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

```

## Class in javascript

```

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

```

## Closure

```

function greeting(greet) {
  return function (name) {
    console.log(`Halo ${name} good ${greet}, have a nice day !`);
  };
}

let morning = greeting("morning");
let afternoon = greeting("afternoon");
let evening = greeting("evening");

morning("aziz");
afternoon("aziz");
evening("aziz");

`Or`

let add = (function () {
  let count = 0;
  return function () {
    return count++;
  };
})();

console.log(add());
console.log(add());
console.log(add());

```

## Arrow Function

```

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

console.log(countStudent);

```
