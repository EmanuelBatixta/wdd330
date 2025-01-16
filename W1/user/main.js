import U, { printAge, printName } from "./user.js";

const user = new U('bob',15)
console.log(user)
printName(user)
printAge(user)