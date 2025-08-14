// in line comment 2 dashes
//ctrl+s to save

var myName = "beau"
myName=8

let ourName = "freecodeCamp"

const pi =3.14//cant change 

console.log(myName)




var a1;
var b1 =2; //declaring a variable

a1=7;

var c1=b1*a1;

console.log(c1)


var a=5;
var b=10;
var c="i am a ";

//do not change code below this line
a=a+1;
b=b+5;
c=c+"niga!";
console.log(c)

//math
var a2=3;

a2 += 12

console.log(a2)


var a3=11
a3-= 6

console.log(a3)
//other topic

var myStr = "I am a \"double quoted\" string inside \"double quotes\""

console.log(myStr)

var myStr1 = 'I am a "double quoted" string inside "double quotes"'
console.log(myStr1)

var lastNameLength=0
var lastName ="LoveLace"

lastNameLenght=lastName.length
console.log(lastNameLenght)


var firstLetterOfLastname="";
var lastName = "lovelace";

firstLetterOfLastName = lastName[5]
console.log(firstLetterOfLastName)

 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result =" "
    result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))
