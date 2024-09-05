//Data types
let name = "Jaspher Jules S Sales";
console.log ("Hi I am "+ name );

//Arethmetic 
let age = 19;
console.log("I am "+age + " years old");

let pyear = 2023;

let byear = pyear - age;
console.log("Born in "+ byear);

//logical operators
let sports1 = "-Basketball"
let sports2 = "-Badminton"
console.log("My sports are:")
console.log(sports1 && sports2)
console.log(sports1 || sports2)


//Conditional Statements

let enjoyingLife = false; 

if (enjoyingLife) {
  console.log("I am enjoying IT life!");
} else {
  console.log("I am not enjoying IT life hehe.");
}

//switch
console.log("Daily Routine: ")
let activity = "wake up"; 

switch (activity) {
  case "wake up":
    console.log("Mo mata og Kaon og limpyo.");
    break;
  case "Kaon":
    console.log("It's time to eat. Enjoy your meal!");
    break;
  case "limpyo":
    console.log("Time to clean up. Let's tidy things up!");
    break;
  case "cellphone":
    console.log("Time to check your cellphone. Catch up on messages!");
    break;
  case "laag":
    console.log("It's time to go out and explore. Have fun!");
    break;
  case "uli":
    console.log("Heading back home. Relax and unwind.");
    break;
  default:
    console.log("Activity not recognized. Enjoy your day!");
    break;
}

//loops


// for loop
for (let i = 3; i > 0; i--) {
  console.log(i);
}
console.log("HAPPY BIRTHDAY!");

// while
let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log("You are now:", sum + "years old");


//Do while

let str = "hello";
let reversed = "";
let index = str.length - 1;
do {
    reversed += str[index];
    index--;
} while (index >= 0);
console.log("Reversed string:", reversed);

//Nested For loop

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
      row += (i * j) + "\t"; // "\t" adds a tab space between numbers
  }
  console.log(row);
}

//Functional programming


// odd or even
let number = 5;

if(number % 2 == 0){
  console.log("The number " + number + "is even");
} else if(number % 2 !== 0){
  console.log("The number " + number + " is odd");

}

