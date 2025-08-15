function isLess(a,b) { //simplier way, instead of writing if, just do this
    return a < b
}

console.log(isLess(0,0))


function abTest(a, b){
    if (a < 0 || b < 0){ //a is lower than 0 and b is higher than 0
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(2,-2)) // or -2,2

var count = 0
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break    
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break
    }
    var holdbet = 'hold'
    if (count > 0) {
        holdbet = 'bet'
    }

    return count + " " + holdbet

}
cc(2); cc(3); cc(10); cc(6); cc(5)
console.log(cc("K"))