"use strict"

/*Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

let jsNameQuestion = prompt("What is the 'official' name of JavaScript", "");

let rightAnswerCheck
if(jsNameQuestion == "ECMAScript"){
    rightAnswerCheck = "Right!";
} else {
    rightAnswerCheck = "You don't know? 'ECMAScript'!";
}    

alert(rightAnswerCheck);