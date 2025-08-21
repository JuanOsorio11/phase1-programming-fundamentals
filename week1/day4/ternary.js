// ternary operator
//condition ? statement-if-true : statement-if-false
/*function checkEqual(a,b){
    if(a===b) {
        return true
    }
        else {
            return false
        }
} harder way
*/
function checkEqual(a,b){
    return a === b ? true : false

    //return a === b
}

//use multiple conditional(ternary) operators 

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-2))
//remeber the format