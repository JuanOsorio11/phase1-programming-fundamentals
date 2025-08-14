 function caseInSwitch(val){
    var answer = "not defined"
    switch(val){
        case 1:
            answer = "alpha"
            break
        case 2: 
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
    }
    return answer
}

console.log(caseInSwitch(4))


function SwitchOfStuff(val){
    var answer = ""
    switch (val) {
        case "a":
            answer = "apple"
            break
        case "b":
            answer = "bird"
            break
        case "c":
            answer = "cat"
            break
        default: //default its basically, if none of the answer(a,b,c) r mention then the answer is "stuff"
            answer = "stuff" 
            break    
    }
    return answer
}

console.log(SwitchOfStuff("c"))


function sequentialSizes(val){ //this case is when you want multiple inputs give the same output, so 1-3 give an answer, and on and on.
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            break
        case 4:
        case 5:
        case 6:
            answer = "medium"
            break
        case 7:
        case 8:
        case 9:
            answer = "high"
            break            
    }
    return answer
}

console.log(sequentialSizes(6))


function chainToSwitch(val){
    var answer = ""

    switch (val){
        case "bob":
        answer = "marley"
        break

        case "42":
        answer = "the answer"
        break

        case "1":
        answer = "there is no #1"
        break

        case "99":
        answer = "missed me by this much!"
        break
    }
    return answer
}

console.log(chainToSwitch("99"))




