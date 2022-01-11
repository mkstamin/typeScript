enum Role {
  ADMIN, //0
  //ADMIN = 4, //4
  READ_ONLY, //1
  AUTHORE, //2
}

const person = {
  name: "Tamin",
  age: 26,
  hobbies: ["Sports", "Traveling"],
  role: Role.ADMIN,
};

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is read only");
}
