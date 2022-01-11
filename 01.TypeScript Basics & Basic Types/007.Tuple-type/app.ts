const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //Tuple
} = {
  name: "Tamin",
  age: 26,
  hobbies: ["Sports", "Traveling"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [1, "admin", "user"];

let favoriteActi: string[];
favoriteActi = ["Sports"];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
