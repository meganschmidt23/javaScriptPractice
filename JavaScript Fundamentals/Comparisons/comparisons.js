//What will be the result for these expressions?

let a = (5 > 4); //true
let b = ("apple" > "pineapple");// false
let c = ("2" > "12");//true, because they're chars
let d = (undefined == null);// true
let e = (undefined === null); //false
let f = (null == "\n0\n"); //false, null = undefined
let g = (null === +"\n0\n"); //false