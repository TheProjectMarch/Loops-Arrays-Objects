//course work
/* function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
} */



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

// DO WOP STUFF LOLOLOL
// var randomNumber = getRandomNumber(10);
// var userGuess;
// var counter = 0;

// do {
//     userGuess = parseInt(prompt("Please guess a number between 1 and 10"));
//     counter++    
// } while (userGuess !== randomNumber);

// document.write("<h1>You guessed the number!</h1></br><p>It took you ",counter," tries to guess the number ",randomNumber);


//FOR LOOPS
/* for (var i = 0; i <= 6; i++){
    console.log('i is equal to ' + i);
} 

console.log('aaaand we\'re done since i is now ' + i); */


/* var html = '';

for (var i = 1; i <= 100; i++){
    html += `<div> ${i} </div>`;
}
document.write(html); */

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

//+++++++++++++++++++++++++++++++++++++++
 //ARRAYS
 //++++++++++++++++++++++++++++++++++++++

/* var groceries = [
    'milk',
    'eggs',
    'bread'
];

console.log(groceries[1]);

groceries.forEach((element, i,a) => {
    console.log(element,a);
});

console.log('sssssss');

console.log(groceries);

console.log(groceries[groceries.length]);

groceries.push('butter');
console.log(groceries); */


/* function printList(list){
    var listHTML = '<ol>';
    for (var i = 0;i < list.length; i+= 1){
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

function print(html) {
    document.write(html);
} 


var playList = [];
var cereals = [];
var cerealCounter = 1;
playList.push('I Did It My Way', 'Mouth for War', 'The Wooden Song', 'Counterfeit', 'Strange Fruit');

printList(playList);

playList.unshift('Lunchbox');

printList(playList);


while (cerealCounter < 5){
    cereals.push(prompt('What cereals do you like?'));
    cerealCounter++;
}

cereals.forEach((v, i, a) => {console.log(v, i,);});

printList(cereals);

console.log('The length of the cereals array is', cereals.length); */


/* +++++++++++++++++++++++++++++++++++
FOR LOOPS WITH ARRAYS
+++++++++++++++++++++++++++++++++++ */

/* var cereals = ['Captain Crunch', 'Trix', 'Cheerios', 'Shredded Wheat', 'Special K'];

for (var i = 0; i < cereals.length; i++){
    console.log(i, cereals[i]);
}

console.log('Done!');

console.log(cereals);
console.dir(cereals);
console.log(JSON.parse(JSON.stringify(cereals))); */



/* 
+++++++++++++++++++++++++++++++
COMPILING A PLAYLIST FROM AN ARRAY AND PRINTING IT TO A WEBPAGE VIA AN ORDERED LIST
+++++++++++++++++++++++++++++++

BONUS: I DID IT WITH LITERAL TEMPLATES
*/
/* var playlistItems;

var playlist = ['I Did it my way',
    'Mouth for War',
    'The Wooden Song',
    'Counterfeit',
    'Strange Fruit'
];
function print(msg){
    document.write(msg);
}
function printList(list){
    playlistItems = ``
    for(let i = 0; i < list.length; i++){
        playlistItems += `<li>${list[i]}</li>`;
    }
    var playlistHtml = `<ol>${playlistItems}</ol>`;
    

    print(playlistHtml);
}

printList(playlist); */

/* 
++++++++++++++++++++++++++++++
USEFUL ARRAY METHODS
++++++++++++++++++++++++++++++
 */

//JOIN - TAKES ALL THE ITEMS OF AN ARRAY AND PUTS THEM INTO A STRING AND SEPARATES EACH VALUE BY A CHOSEN DELIMITER. 

/* function print(msg){
    document.write(msg);
}
var cereals = ['Captain Crunch',
    'Trix',
    'Cheerios',
    'Shredded Wheat',
    'Special K'
];

var cerealString = cereals.join(" _|_ ");

console.log(cerealString);
print(cerealString); */

//CONCAT - JOIN TWO OR MORE ARRAYS. THIS GIVES A NEW ARRAY. DOES NOT FUCK WITH THE ORIGINALS

/* var sugarCereals = ['Trix', 'Fruity Pebbles', 'Captain Crunch'];
var healthyCereals = ['Special K', 'Cheerios', 'Grape Nuts'];
var allCereals;
function print(msg){
    document.write(msg);
    
}
function printList(list, heading){
    var listItems = ``
    for(let i = 0; i < list.length; i++){
        listItems += `<li>${list[i]}</li>`;
    }
    var listHeading = `<h2 style="padding-bottom: 10px;">${heading}</h2>`
    var listHtml = `${listHeading}<ol>${listItems}</ol><br><br>`;
    

    print(listHtml);
}
console.dir(sugarCereals);
console.dir(healthyCereals);

allCereals = sugarCereals.concat(healthyCereals);

console.dir(allCereals);

printList(sugarCereals, "Sugar Cereals");
printList(healthyCereals, "Healthy Cereals");
printList(allCereals, "All Cereals");
 */

 /* 
 ============================
 INDEXOF - LETS YOU SEARCH AN ARRAY FOR A PARTICULAR VALUE. IF THE VALUE IS IN THE ARRAY, THEN THAT ELEMENT'S POSITION (INDEX) IS RETURNED
 ============================
 */


var sugarCereals = ['Trix', 'Fruity Pebbles', 'Captain Crunch'];
var healthyCereals = ['Special K', 'Cheerios', 'Grape Nuts'];
var allCereals;
var userAnswer = "";
var question = 0;
allCereals = sugarCereals.concat(healthyCereals);
//console.log("Fruity Pebbles was found at Index", sugarCereals.indexOf('Fruity Pebbles'));


while(question < 2){
    question++
    userAnswer = allCereals.indexOf(prompt("What cereal do you like?"))

    console.log(userAnswer);
    

   /*  if (!userAnswer){
        alert(`Hmm, not a fan of that. What else do you like?`);
    } else {
        alert(`Awesome! I love ${allCereals[userAnswer]}. What else do you like?`);
    }
 */
}





