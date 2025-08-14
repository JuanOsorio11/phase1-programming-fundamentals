function ourReusableFunction(){
    console.log("heyya,world")
}

ourReusableFunction()

function ourFunctionWithArgs(a,b){
    console.log(a-b)
}

ourFunctionWithArgs(1,5)

//new topic
var myGlobal= 10



function fun1(){
    oopsGlobal= 5 //no need to use var because then it doesnt become global but sometimes it might need them
}

function fun2(){
    var output= ""
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal
    } 
    console.log(output)
}

fun1()
fun2()



//new topic

function myLocalScope(){
    var myVar = 5
    console.log(myVar)
}

myLocalScope() 
//dont use variables outside, it can be inside functions

var outerwear = "t-shirt"

function inerwear(){
    return outerwear
}

//console.log(inerwear())

var outerwear = "t-shirt"

function inerwear2(){
    var outerwear= "pants"
    return outerwear
}

console.log(inerwear2())
console.log(outerwear)
//the function doesnt override the outerwear. but what comes out of the function is pants instead of t shirt, 
// but if we use console log to get outerwear instead of the function then t shirt is returned


function minusSeven(num){
    return num - 7
}

console.log(minusSeven(10))

//example 2

function minusSeven2(num){
    return num * 10
}

console.log(minusSeven2(10))


var sum = 2
function addFive(){
    var black = sum + 5
    return black
}
console.log(addFive())


function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "yes, it's true"
    }
    return "No, its false"
}

console.log(ourTrueOrFalse(true))



