"use strict";

//collaborator

let father = {
  name: 'seth',
};

let son = {
  name: 'kai',
  father: father,
};

console.log(son.name, son.father.name);

// iterating for enumerables of prototype/object

let a = {
  foo: 1,
  bar: 3,

  fakeMethod() {},
};

a.bar = 78;

let b = Object.create(a);
let c = Object.create(b);
let d = Object.create(c);

let e = {};
Object.setPrototypeOf(e, d);

c.noo = 'ok';
d.oip = false;

b.yep = 5;

b.anotherFake = function() {};

for (let key in b) {
  console.log(b[key]);
}

Object.keys(b).forEach((key) => console.log(b[key]));

console.log('-----------');
let obj = e;

while (true) {
  if (Object.getPrototypeOf(obj)) {
    console.log(Object.getPrototypeOf(obj));
    obj = Object.getPrototypeOf(obj);
  } else {
    break;
  }
}

// object Factory

function person(name, age) {
  return {
    name: name,
    age: age,
  };
}

let seth = person('seth', 33);

console.log(seth);
console.log(e.bar);