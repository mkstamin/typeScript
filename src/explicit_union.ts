let a: string;

let b: number;

a = "Mks";
b = 39;

/*
 ************* array ************
 */
// let arr: Array<string> = [];
let arr: (string | number)[] = [];

arr.push(40);
arr.push("Any");

/*
 ************* object ************
 */
let obj: object;

obj = {
  name: "Mks",
  age: 25,
  arr: [2, 3, 4, 5],
};
// obj = [2, 4, 5, 6];

let obj1: {
  name: string;
  age: number;
  isStudent: boolean;
};

obj1 = {
  name: "Mks",
  age: 25,
  isStudent: true,
  //   arr: [2, 3, 4, 5],
};
