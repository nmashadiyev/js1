//first
let NUM = 42; 

console.log(`Fifth power: ${NUM ** 5}`);
console.log(`Remainder by 3: ${NUM % 3}`);

//second
let firstName = "Nazim";
let lastName = "Mashadiyev";

console.log(`We are glad to see you, ${firstName} ${lastName}. `);

//third
let Fullname = "Nurali Sultanov"; 

const nameWithoutSpaces = Fullname.replace(/\s/g, "");

const numberOfLetters = nameWithoutSpaces.length;

console.log(numberOfLetters);

//fourth
let Fullname2 = "Vladimir Putin"; 

const nameParts = Fullname2.split(" ");

const firstInitial = nameParts[0].charAt(0);

const lastInitial = nameParts[nameParts.length - 1].charAt(0);

console.log(firstInitial + lastInitial);