//course work
function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}
var counter = 0;
while (counter < 100) {
    var randNum = randomNumber(6);
    document.write(randNum," ");
    counter++;
}

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
