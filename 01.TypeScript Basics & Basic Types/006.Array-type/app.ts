// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Tamin",
  age: 26,
  hobbies: ["Sports", "Traveling"],
};

let favoriteActi: string[];
favoriteActi = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
