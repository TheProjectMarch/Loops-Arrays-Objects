//course work
function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

//WHILE LOOP STUFF
/* var counter = 0;
while (counter < 100) {
    var randNum = randomNumber(6);
    document.write(randNum," ");
    counter++;
} */

//IF LOOP STUFF
var randNum = randomNumber(23000);
var guessCounter = 0
while (randNum !== randNum2){
    var randNum2 = randomNumber(23000);
    guessCounter++
}
document.write("<p>The Random Number was: ",randNum,"</p>")
document.write("<p>It took the computer ",guessCounter," attempts to get it right</p>")

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
