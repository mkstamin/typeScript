/* Different types */

//The primitives: string, number, and boolean

// let myName: string = "Mks Tamin";
// let age: number = 26;
// let adult: boolean = true;

// let person = {
//   name: "Mks Tamin",
//   age: 26,
//   adult: true,
// };

// console.log(person.name);

// //@TODO:ARRAY

// // let arr: any[] = [];
// let arr: Array<number> = [];

// arr[0] = 23;

// console.log(arr);

// let myName;

// console.log(myName);
// myName = 23;
// console.log(myName);

// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(23, 34));

//Arry

let mixed = ["mks", 23, true, {}];

mixed.push({
  name: "Tamin",
});

//Object

let person = {
  nema: "Tamin",
  age: 25,
  student: true,
};

//It will not define because the person onject has own scheama (ex:name,age,student)
// person.country = "Bangladesh";
