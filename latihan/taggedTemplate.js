const name = "abdul aziz";
const age = 22;

function make(args, ...values) {
  let str = "";

  args.forEach((arg, i) => {
    str += `${arg}${values[i] || ""}`;
  });

  return str;
}

const tryTagged = make`Hello my name is ${name}, I am ${age} `;

console.log(tryTagged);
