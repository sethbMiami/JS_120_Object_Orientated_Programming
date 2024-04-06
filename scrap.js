"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.intro = function() {
  return this.name;
};

function Human(name, age) {
  Person.call(this, name, age);
}

Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

let dude = new Human('paul', 70);

let seth = new Person('seth', 33);

console.log(seth.intro());

console.log(Person.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Object.getPrototypeOf(seth) === Person.prototype);
console.log(seth instanceof Person);
console.log(Object.getPrototypeOf(seth).constructor);


// OLOO

let humanPrototype = {
  breath() {},

  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  }
};

let em = Object.create(humanPrototype).init('emily', 26);
console.log(em);
console.log(dude);
console.log(dude.intro());