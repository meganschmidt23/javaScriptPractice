"use strict"

/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */
let response;
let userCurrent = prompt("Who's there?", "");
if (userCurrent === "Admin"){

    let password = prompt("What is your password?", "");
    if(password === null || password === ""){
        response = "Canceled";
    } else if(password === "TheMaster"){
        response = "Welcome!";
    }else{
        response = "Wrong password"
    }
} else if (userCurrent === "" || userCurrent === null){
    response = "Canceled";
} else{
    response = "I don't know you";
}
alert (response);