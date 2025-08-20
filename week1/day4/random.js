//random fractions and whole numbers

function randomFraction(){


    return Math.random()        
}
//math.random cant be 0 and cant quite be 1
console.log(randomFraction())
//random: this can be any decimal and whole number
//generate random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
//floor its gna be a whole number, if we multiply with 20, we r gna get a number between 20,(0-19)
function randomWholeNum(){


    return Math.floor(Math.random() * 10)
}

console.log(randomWholeNum())
//generate random whole numbers within a range

function randomRange(myMin, myMax){



    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

var MyRandom = randomRange( 5, 15)


console.log(MyRandom)