//Write a program that takes a number 1–7 and prints the day of the week.


function dayOfTheWeek(val){
    var answer = ""
    switch (val){
        case 1:
            answer = "monday"
            break
        case 2:
            answer = "tuesday"
            break
        case 3:
            answer = "wednesday"
            break
        case 4:
            answer = "thursday"
            break
        case 5:
            answer = "friday"
            break
        case 6:
            answer = "saturday"
            break
        case 7:
            answer = "sunday"
            break
    }
    return answer
}

console.log(dayOfTheWeek(2))


function Grades(val){
    var answer = ""
    switch (val){
        case "a":
            answer = "excellent"
            break

        case "b":
            answer = "good"
            break

        case "c":
            answer = "meh"
            break
        case "f":
            answer = "you are a dissapointment"
            break        
    }
    return answer
}

console.log(Grades("f"))