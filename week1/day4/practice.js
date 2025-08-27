/*-Check if a number is even or odd with a ternary.  
- Multiple ternary: convert score (90+, 70–89, 50–69, <50) into `"A"`, `"B"`, `"C"`, `"F"`.
*/


/*
- Function `randomFraction()` → return a number 0–1.  
- Function `rollDice()` → return integer 1–6.  
- Function `randomInRange(min, max)` → return integer in range.
*/

function randomFraction(){

    return Math.random()
}

console.log(randomFraction())

function randomInRange(myMax, myMin){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomInRange(0,100))

function rollDice(){


    return Math.floor(Math.random() * 6) + 1
}

console.log("dice number =" + rollDice())


/*
- Convert `"42px"` into `42`.  
- Convert binary `"1010"` to decimal using `parseInt("1010", 2)`.
*/

function convertion(str){
    return parseInt(str)
}
console.log(convertion("42px"))

function binaryTest(str){
    return parseInt(str, 2)
}

console.log(binaryTest("1111"))//binary is only 0 and 1
/*
- Check if a number is even or odd with a ternary.  
- Multiple ternary: convert score (90+, 70–89, 50–69, <50) into `"A"`, `"B"`, `"C"`, `"F"`.
*/

//condition ? statement-if-true : statement-if-false
//this is to check odd %
function oddAndEven(num){
    if (num % 2 === 0){
        return "even Number"
    } else{
        return "odd Number"
    }
}
console.log(oddAndEven(5))

function gradeScore(num){
    return num > 100 ? "stop the cap" : num >= 90 ? "A" : num < 90 ? "B" : num <= 69 ? "C" : "F"
} 
console.log(gradeScore(101))

/*
  1. Contact lookup function.  
  2. Dice roller using random.  
  3. Grading system with ternary operators.  
  4. Arrow function that doubles numbers.  
  */

var contacts = [
    {
        "firstName" : "Akira" ,
        "lastName" : "Laine" ,
        "number" : "0543236543",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    }, 
    {
        "firstName" : "Harry" ,
        "lastName" : "Potter" ,
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]

    },
    {   
        "firstName" : "Sherlock" ,
        "lastName" : "Holmes" ,
        "number" : "0487345643",
        "likes" : ["Intriguing Cases", "Violin"]

    },
    {
        "firstName" : "Kristian" ,
        "lastName" : "Vos" ,
        "number" : "unknown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    },
]

function contactLookup(name,prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "not such property"
        }
    } 
    return "does not exist"
}

const data = contactLookup("Sherloc", "number")

console.log(data)

function diceRoller(){
    var dice1 = Math.floor(Math.random() * 6) + 1
    var dice2 = Math.floor(Math.random() * 6) + 1
    return {
        dice1: dice1,
        dice2: dice2,
        total: dice1 + dice2
    }
}
const result = diceRoller();
console.log(`Dice 1: ${result.dice1}, Dice 2: ${result.dice2}, Total: ${result.total}`);
//Grading system with ternary operators.  
//condition ? statement-if-true : statement-if-false

function gradeScore1(num){
    return num > 100 ? "stop the cap" : num >= 90 ? "A" : num < 90 ? "B" : num <= 69 ? "C" : "F"
} 

console.log(gradeScore1(101))

//Arrow function that doubles numbers.

const double = number => number * 2

console.log(double(4))
