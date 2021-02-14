"use strict"
//What are results of these expressions?

let one = "" + 1 + 0; //"10"
let two = "" - 1 + 0 ;// -1
let three = true + false; //1
let four = 6 / "3"; // 2
let five = "2" * "3"; // 6
let six = 4 + 5 + "px"; //"9px"
let seven = "$" + 4 + 5; //$45
let eight = "4" - 2; //2
let nine = "4px" - 2; //NaN
let ten = "  -9  " + 5; //"-9 5"
let eleven = "  -9  " - 5; //-14
let twelve = null + 1; //1
let thirteen = undefined + 1; //NaN
let fourteen = " \t \n" - 2; // -2