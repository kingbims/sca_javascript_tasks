// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "M",
}

// Write your intern objects here:

const interns = [
  {
    id: 1,
    email: "mmelloy0@psu.edu",
    name: "Mitzi",
    gender: "F"
  },
  {
    id: 2,
    email: "kdiben1@tinypic.com",
    name: "Kennan",
    gender: "M"
  },
  {
    id: 3,
    email: "kmummery2@wikimedia.org",
    name: "Keven",
    gender: "M"
  },
  {
    id: 4,
    email: "gmartinson3@illinois.edu",
    name: "Gannie",
    gender: "M"
  },
  {
    id: 5,
    email: "adaine5@samsung.com",
    name: "Antonietta",
    gender: "F"
  }
]


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender

console.log(interns[0].name);
console.log(interns[1].id);
console.log(interns[2].email);
console.log(interns[3].name)
console.log(interns[4].gender)


// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
const speak = "Hello, my name is";
console.log(`${speak} ${interns[1].name}!`)


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));


const multiplyNums = (x, y) =>  x*y

console.log(`${interns[4].name}.${multiplyNums(3,4)}`)