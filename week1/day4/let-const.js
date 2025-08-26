//differences between var and let

let catName = "quincy"

let quote;

catName = "beau"

function catTalk(){
    "use strict"//catch coding mistakes if not declaring a variable
    catName = "Oliver"
    quote = catName + " says Meow!"
}

console.log(catTalk())

//console.log(a)
//let a = 5; //error and if its var, its undefined. so console log has to be blow this line

//compare scopes of the var and let keyword
//let is for stuff inside a block,example:
//var is general, let is more private
function checkScore() {
    "use strict"
        let i = "function scope"
        if (true) {
            let i = "block scope"
            console.log("block scope i is: ", i)
        }
        console.log("function scope i is: ", i)
        return i
}
checkScore()

//declare a read-only variable with the const keyword

const s = [5,7,2]
function editInPlace() { 
    "use strict"

    s[0] = 2
    s[1] = 5
    s[2] = 7
}
//the only way to change an array when is const
editInPlace()
console.log(s)

//prevent object mutation
function freezeObj(){
    "use strict"
    const MATH_CONSTANTS = {
        PI: 3.14
    }

    Object.freeze(MATH_CONSTANTS)
}

//this prevents any further changes to objects, in this case, pi wont change.

//Create a `const` array and mutate its contents.

const hola = [7,6,5]

function mutateArray(){
    hola[0] = 2
    hola[1] = 7
    hola[2] = 3
}

console.log(hola)

//Freeze an object with `Object.freeze()` and attempt mutation.

function mutationAttempt(){
    "use strict"
    const Math_const = {
        Pi: 3.14
    }
    Object.freeze(Math_const)
    try{
        Math_const.Pi = 99
    } catch(e) {
    }
    return Math_const
}
console.log(mutationAttempt())

//Try redeclaring a variable with `var` and `let` and note the difference.  


function redeclare(){
    let bomb = ["pene"]
    console.log("start " + bomb)
    if (true){
        let bomb = ["nada"]
        console.log("new " + bomb)
    }
    console.log("end " + bomb)
}
redeclare()

