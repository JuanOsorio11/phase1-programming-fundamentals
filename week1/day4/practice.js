/*-Check if a number is even or odd with a ternary.  
- Multiple ternary: convert score (90+, 70–89, 50–69, <50) into `"A"`, `"B"`, `"C"`, `"F"`.
*/


/*
- Function `randomFraction()` → return a number 0–1.  
- Function `rollDice()` → return integer 1–6.  
- Function `randomInRange(min, max)` → return integer in range.
*/

function randomFraction(){

    return Math.floor(Math.random()* 2)
}

console.log(randomFraction())

function randomInRange(myMax, myMin){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomInRange(0,100))

function randomWholeNum(){


    return Math.floor(Math.random() * 6) + 1
}
console.log(randomWholeNum())