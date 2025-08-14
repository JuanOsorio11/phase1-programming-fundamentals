function testEqual(val){
    if(val==12){
        return "equal"
    }
    return "not equal"
}

console.log("operator exercices " + testEqual("12"))


/*
3 === 3 
3 ===3 "3" /evaluate to false
*/

function testStrict(val){
    if (val===7){
        return "Equal"
    }
    return "not Equal"
}

console.log(testStrict("7"))  //even if the numbers r the same, when 3 equals its gna equal to false, so its not equal

function compareEquality(a,b) {
    if (a===b) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(compareEquality(1,"1"))


function testNotEqual(val){
    if (val != 99){
        return "not equal"
    }
    return "equal"
}

console.log(testNotEqual("99"))
// with !== means like a ===. so be careful for "". that is the difference between == and ===. 


//greater then or lower then below this point or equal to

function testGreaterThan(val){
    if (val > 100){
        return "over 100"
    }
    if (val >= 10 ){
        return "10 or over 10"
    }
    //if (val >= 10){
        //return "infinite"
    //}
}
console.log(testGreaterThan(101))

/*si la flecha esta apuntando al numero, significa que es menor que el numero, si hay un equal, es el numero y abajo del numero,
si la flecha esta apuntando a la variable en este caso, es mas grande que el numero, es este caso es 100 o 10.
*/

function lowerThan(val){
    if (val < 10){
        return "lower than 10"
    }
    if (val <= 25){
        return "lower than 25"
    }
    else return "25 or over"
}
console.log(lowerThan(25))

//and usage
function testLogicAnd(val){
    if (val <=50 && val >= 25 ){ //if number is lower or equal to 50 and higher or equal to 25, then say "yes"
        return "yes"
    }
    return "no"
}
console.log(testLogicAnd(28))
//or usage
function testLogicalOr(val){
    if (val < 10 || val > 20){ //if the number is lower than 10 and more than 20
        return "outside"
    }
    return "inside"
}
console.log(testLogicalOr(21))

//else usage

function testElse(val){
    var result

    if (val > 5){//higher than 5, if the number is not higher than 5 then the answer is bigger than 5
        result = "bigger than 5"
    } else {
        result = "5 or Smaller"
    }
    return result
}

console.log("help " + testElse(6))

//else if statement

function testElseIf(val){
    if (val > 10){
        return "greater than 10"
    } else if (val < 5){
        return "smaller than 5"
    } else{
        return "between 5 and 10"
    }
}

console.log(testElseIf(4))



function test1(num){
    if (num < 5){
        return "tiny"
    } else if(num < 10){
        return "small"
    } else if(num < 15){
        return "medium"
    } else if (num < 20){
        return "large"
    } else (num >= 20)
        return "huge"
}

let randomnum = Math.floor(Math.random() * 25) + 1;

console.log("Number:", randomnum);
console.log("Size:", test1(randomnum));

//golf code
var names= ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"]

function golfScore(par,strokes){
    if (strokes == 1){
        return names[0]
    } else if (strokes == par - 2){
        return names[1]
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes >= par + 3){
        return names[6]
    }
    return "change me"
}

console.log(golfScore(5,8))




