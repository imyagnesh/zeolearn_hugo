// Major problem of ES5

var a = "a";

{
  var a = "a";
}

console.log(a);

// hijacked function

function foo() {
  console.log("Original");
}

foo = function() {
  console.log("hijacked");
};

console.log(foo());

// Solve hijack problem

const foo = function() {
  console.log("Original");
};

foo = function() {
  console.log("hijacked");
};

console.log(foo());

// deep of constant

const a = "a";

{
  const a = "b";
  console.log(a);
}

console.log(a);

// ES5 Way to concatenated string

const fistName = "Yagnesh";
const lastName = "Modh";

const fullName = "Hello, " + fistName + " " + lastName;

console.log(fullName);

// ES6 Way to concatenate string

const fullName1 = `Hello, ${fistName}`;

console.log(fullName1);

const html =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n\t<head>" +
  '\n\t\t<meta charset="UTF-8" />' +
  '\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '\n\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge" />' +
  "\n\t\t<title>Document</title>" +
  "\n\t</head>" +
  "\n\t<body></body>" +
  "\n</html>";

console.log(html);

const html5 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
`;

console.log(html5);

// object declaration
// ES5 way
var firstName = "Yagnesh";
var lastName = "Modh";

const detailsES5 = {
  firstName: firstName,
  lastName: lastName,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(detailsES5);

console.log(detailsES5.fullName());

const detailsES6 = {
  firstName,
  lastName,
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(detailsES6);
console.log(detailsES6.fullName());

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log(this.type);
    console.log("making animal sound");
  }
}

let a = new Animal("dog");
// console.log(a.type)
// console.log(a.makeSound())

class Cat extends Animal {
  constructor() {
    super();
  }

  makeSound() {
    super.makeSound();
    console.log(this.type);
    console.log("Meow!!!");
  }
}

let c = new Cat();
console.log(c.type);
console.log(c.makeSound());
console.log(c);

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => a / b;

const calc = (a, b) => {
  return operation => {
    return operation(a, b);
  };
};

console.log(calc(1, 2)(div));

// deep comparision
// shallow compare

const a = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 2
  }
};

const b = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 3
  }
};

const a = [1, 2, 3];

// Mutable way to change the value of array

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     a[index] = element * 2;
// }

// console.log(a)

// immutable way to change the value of array

const b = a.map(item => {
  if (item % 2 === 0) {
    return item;
  }
  return item * 2;
});

console.log(a);
console.log(b);

const a = {
  a: 1,
  b: 2
};

// mutably add another property

// a.c = 3;

// console.log(a)

// a.b = 3;

// console.log(a)

// immutably add another property

const newA = { b: 3, ...a };

console.log(a);
console.log(newA);

const a = {
  a: 1,
  b: 2,
  c: 3
};

// console.log(a.b)
// console.log(a.c)

// object destructuring
const { a: aa, b, c } = a;

console.log(b);
console.log(c);
console.log(aa);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "namrata",
    gender: "female"
  }
];

const newUsers = users.map(item => {
  return {
    ...item,
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    gender: "male"
  };
});

console.log(users);
console.log(newUsers);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "namrata",
    gender: "female"
  }
];

const newUser = users.filter(item => {
  return item.gender === "female";
});

console.log(newUser);

const a = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     sum = sum + element
// }

// console.log(sum);

const sum = a.reduce((previous, current) => {
  console.log(previous);
  console.log(current);
  console.log(previous + current);
  return previous + current;
}, 0);
console.log(sum);

// const a = null;
// const b = 2;

// const c = a || b;

// console.log(c);

// const d =  a && b;

// console.log(d)

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "namrata",
    gender: "female"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  }
];

//   {
//       male: [{
//         name: "yagnesh",
//         gender: "male"
//       },
//       {
//         name: "rohit",
//         gender: "male"
//       }
//     ],
//       female: [{
//         name: "namrata",
//         gender: "female"
//       },
//       {
//         name: "dipika",
//         gender: "female"
//       }
//     ]
//   }

const groupBy = users.reduce((previous, current) => {
  console.log(previous);
  previous[current.gender] = previous[current.gender] || [];
  previous[current.gender].push(current);
  return previous;
}, {});

console.log(groupBy);

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  }
}

let a = new Animal("dog");
a.makeSound();

const a = {
  a: 1,
  b: 2,
  c: 3
};

for (const b in a) {
  console.log(b);
  console.log(a[b]);
}

const a = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(a));

Object.keys(a).forEach(function(key) {
  console.log(key, a[key]);
});

// for (const b in a) {
//     console.log(b);
//     console.log(a[b]);
// }

const arr = [...Array(1000000).keys()];

console.time("for loop");

const newArr = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element);
}

console.timeEnd("for loop");

console.time("foreach loop");

const newArr1 = [];
arr.forEach(element => {
  newArr1.push(element);
});

console.timeEnd("foreach loop");

console.time("map loop");

const newArr3 = arr.map(item => item);

console.timeEnd("map loop");

let arr = {
  a: 1,
  b: 2,
  c: 3
};

for (const [key, value] of Object.entries(arr)) {
  console.log(key, value);
}

const a = {
  a: 1,
  b: 2,
  c: 3
};

const b = { ...a, c: 4 };

console.log(b);

const { c, ...rest } = b;

console.log(c);
console.log(rest);

function xyz({ id, ...rest }) {
  console.log(rest);
  return rest;
}

console.log(xyz({ id: 1, name: "yagnesh", gender: "male" }));

const a = [1, 2, 3, 4, 5, 6];

// a.push(7);
// a.reverse()
// console.log(a);

const b = [7, ...a];

console.log(b);

const index = a.findIndex(x => x === 3);

console.log(index);

const c = [...a.slice(0, index + 1), 7, ...a.slice(index + 1)];

console.log(c);

const a = [1, 2, 3, 4, 5, 6];

// a.push(7);
// a.reverse()
// console.log(a);

const b = [7, ...a];

console.log(b);

const index = a.findIndex(x => x === 3);

console.log(index);

const c = [...a.slice(0, index + 1), 7, ...a.slice(index + 1)];

console.log(c);

const [, , x, y, z, ...xyz] = a;

console.log(x);
console.log(y);
console.log(z);
console.log(xyz);

const a = [1, 2, 3, 4, 5, 6];

const index = a.findIndex(x => x === 3);

const b = [...a.slice(0, index), ...a.slice(index + 1)];

const c = a.filter(x => x !== 3);

console.log(b);

console.log(c);

function xyz() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved Promise");
    }, 1000);
  });
}

// es5 syntax

xyz()
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log(err);
  });

// es6 syntax

const abc = async () => {
  try {
    const data = await xyz();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// async function pqr() {

// }
abc();
console.log("abc");
console.log("pqr");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve P1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject P2");
  }, 500);
});

const AllPromise = async () => {
  try {
    const res = await Promise.all([p1, p2]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const RacePromise = async () => {
  try {
    const res = await Promise.race([p1, p2]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

AllPromise();
RacePromise();

function* abc() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return "abc";
}

const gen = abc();

for (const iterator of gen) {
  console.log(iterator);
}

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
