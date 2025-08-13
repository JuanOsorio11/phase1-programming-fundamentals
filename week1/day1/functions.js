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