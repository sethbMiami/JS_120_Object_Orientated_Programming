// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.startEngine();
//     this.bedType = bedType;
//   }
//   startEngine() {
//     console.log('Ready to go!');
//   }
// }

// class Car extends Vehicle {

// }

// let truck = new Truck(2003, 'short');
// console.log(truck.year); // 2003
// console.log(truck.bedType); // 2003


// let car = new Car(2015);
// console.log(car.year); // 2015

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {

//   startEngine(speed) {
//     return super.startEngine() + `Drive ${speed}, please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

// let array = [1, 0];
// let me = array.slice().splice(0, 1);
// console.log(me);

// const walkMixin = {
//   walk() {
//     return "Let's go for a walk!";
//   }
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// };

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}

// Object.assign(Dog.prototype, swimMixin);
// Object.assign(Fish.prototype, swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

// const towMixin = {
//   tow() {
//     return "I can tow a trailer!";
//   }
// };

// class Truck {}
// Object.assign(Truck.prototype, towMixin);
// class Car {}

// let truck = new Truck();
// console.log(truck.tow());

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.year =
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);