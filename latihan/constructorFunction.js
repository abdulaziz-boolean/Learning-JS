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
