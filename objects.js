"use strict";
/* eslint-disable max-lines-per-function */

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');
//Good Morning Victor

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     let price = this.price - discount;

//     return price;
//   },
// };

// console.log(item.discount(20));   // should return 40
// //40
// console.log(item.discount(50));   // should return 25
// //20
// console.log(item.discount(25));  // should return 37.5
//15

// function objectsEqual(obj1, obj2) {
//   let values2 = Object.values(obj2);

//   for (let key in obj1) {
//     if (!(obj2.hasOwnProperty(key)) || !(values2.includes(obj1[key]))) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

/*
info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
*/

// function createStudent(name, year) {
//   return {
//     name: name,
//     year: year,
//     courses: [],

//     info() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     listCourses() {
//       console.log(this.courses);
//     },

//     addCourse(object) {
//       this.courses.push(object);
//     },

//     addNote(courseCode, note) {
//       this.courses.forEach((course) => {
//         if (course.code === courseCode) {
//           if (course.hasOwnProperty('note')) {
//             course.note += `; ${note}`;
//           } else {
//             course.note = note;
//           }
//         }
//       });
//     },

//     viewNotes() {
//       this.courses.forEach((course) => {
//         if (course.hasOwnProperty('note')) {
//           console.log(`${course.name}: ${course.note}`);
//         }
//       });
//     },

//     updateNote(courseCode, note) {
//       this.courses.forEach((course) => {
//         if (course.code === courseCode) {
//           course.note = note;
//         }
//       });
//     }
//   };
// }

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"