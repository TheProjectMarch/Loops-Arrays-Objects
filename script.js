//course work
function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

//WHILE LOOP STUFF
/* var counter = 0;
while (counter < 100) {
    var randNum = randomNumber(6);
    document.write(randNum," ");
    counter++;
} */

//WHILE LOOP STUFF PART 2
/* var upper = 23000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

while (guess !== randomNumber){
    guess = getRandomNumber(upper);
    attempts++;
}
document.write("<p>The Random Number was: ",randomNumber,"</p>")
document.write("<p>It took the computer ",attempts," attempts to get it right.</p>") */

//DO WOP STUFF LOLOLOL
var randomNumber = getRandomNumber(10);
var userGuess;
var counter = 0;
var correctGuess = false;

do {
    userGuess = prompt("Please guess a number between 1 and 10");
    counter++    
    if (parseInt(userGuess) === randomNumber){
        correctGuess = true;
    }
} while (! correctGuess );

document.write("<h1>You guessed the number!</h1></br><p>It took you ",counter," tries to guess the number ",randomNumber);

// muh tinkerin'. 
/* var user = "Doug";
var counter = 0;
alert("Hello, world!");


if (user === "Doug"){
    alert("Hey, Doug!");
} else {
    alert("Uh... what do YOU want?");
}

while (counter < 4){
    console.log(counter);
    counter++
}
console.log("The counter is now at",counter,"so we're done!");

alert("Goodbye!");
 */
