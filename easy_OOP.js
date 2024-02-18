"use strict";

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getLength() {
//     return this.length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);  // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return super.introduce() + " Meow meow!";
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// let dog = new Dog("Max", 5, "hungry", "Seth");
// console.log(dog.greetMaster());
// console.log(dog.introduce());
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.legs);
// console.log(dog.status);
// console.log(dog.species);
// console.log(dog.master);

// class Vehicle {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {}

// class Motorcycle extends Vehicle {}

// class Truck extends Vehicle {
//   constructor(make, model, wheels, payload) {
//     super(make, model, wheels);
//     this.payload = payload;
//   }
// }

// let car = new Car('volvo', 'xc-40', 4);
// let motorcycle = new Motorcycle('bmw', 'f800', 2);
// let truck = new Truck('ford', 'f150', 4, 5000);

// console.log(car.info());
// console.log(motorcycle.info());
// console.log(truck.info());

// class Person {

//   greeting(text) {
//     return text;
//   }
// }

// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }

// class Shouter extends Person {

//   greeting(text) {
//     return super.greeting(text.toUpperCase());
//   }
// }

// // function Shouter() {
// //   Person.call(this);
// // }
// // Shouter.prototype = Object.create(Person.prototype)
// // Shouter.prototype.greeting = function(text) {
// //   Person.prototype.greeting.call(this, text.toUpperCase());
// // }

// let person = new Person();
// let shouter = new Shouter();

// console.log(person.greeting("Hello. It's very nice to meet you.")); // Hello. It's very nice to meet you
// console.log(shouter.greeting("Hello my friend.")); // HELLO MY FRIEND.

// const moving = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// Object.assign(Person.prototype, moving);
// Object.assign(Cat.prototype, moving);
// Object.assign(Cheetah.prototype, moving);


// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }
// }

// class Pet {
//   constructor(species, name) {
//     this.species = species;
//     this.name = name;
//     this.owner = null;
//   }
// }

// class Shelter {
//   constructor() {
//     this.adopters = [];
//     this.pets = [];
//   }

//   adopt(newOwner, petName) {
//     if (!this.adopters.includes(newOwner) && !(newOwner instanceof Shelter)) {
//       this.adopters.push(newOwner);
//     }

//     newOwner.pets.push(petName);
//     petName.owner = newOwner;
//   }

//   printAdoptions() {
//     this.adopters.forEach((owner) => {
//       console.log(`${owner.name} has adopted the following pets:`);
//       owner.pets.forEach((pet) => {
//         console.log(`a ${pet.species} named ${pet.name}`);
//       });
//       console.log();
//     });
//   }

//   printUnadopted() {
//     console.log("The Animal Shelter has the following unadopted pets:");
//     this.pets.forEach((pet) => console.log(`a ${pet.species} named ${pet.name}`));
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');
// let asta         = new Pet('dog', 'Asta');
// let laddie       = new Pet('dog', 'Laddie');
// let fluffy       = new Pet('cat', 'Fluffy');
// let kat          = new Pet('cat', 'Kat');
// let ben          = new Pet('cat', 'Ben');
// let chatterbox   = new Pet('parakeet', 'Chatterbox');
// let bluebell     = new Pet('parakeet', 'Bluebell');


// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);

// shelter.adopt(shelter, asta);
// shelter.adopt(shelter, laddie);
// shelter.adopt(shelter, fluffy);
// shelter.adopt(shelter, kat);
// shelter.adopt(shelter, ben);
// shelter.adopt(shelter, chatterbox);
// shelter.adopt(shelter, bluebell);

// shelter.printAdoptions();
// shelter.printUnadopted();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return '+'.padEnd(this.message.length + 1, '-') + '--+';
  }

  emptyLine() {
    return '|'.padEnd(this.message.length + 1, ' ') + '  |';
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/
let banner2 = new Banner('');
banner2.displayBanner();
/*
+--+
|  |
|  |
|  |
+--+
*/