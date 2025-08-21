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