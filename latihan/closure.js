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

let add = (function () {
  let count = 0;
  return function () {
    return count++;
  };
})();

console.log(add());
console.log(add());
console.log(add());
