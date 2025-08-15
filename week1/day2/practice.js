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


/*1. Create an object `book` with `title`, `author`, and `year`.
2. Print the `author` using dot notation.
3. Add a new property `pages`.
4. Update `year` to a new value.
5. Delete the `pages` property.
6. Check if `book` has the property `author`.
*/

//1 
var book = {
    "title" : "La Mancha",
    "author" : "Juan",
    "year" : 2025
}

//2
console.log(book.author)

//3
book["pages"] = 100 //this is another version to add a property book.pages = 100

//4
book.year = 2020
console.log(book.pages)
//console.log(book.year)
//5
delete book.pages
//6
function checkObj(checkProp){
    if (book.hasOwnProperty(checkProp)) { //hasOwnProperty
        return book[checkProp]
    }
}

console.log(checkObj("author"))


/*In `practice.js`:
- Create an object `contacts` with 3 people’s names as keys and their phone numbers as values.
- Write a function `findContact(name)` that:
  - Returns the phone number if it exists.
  - Returns `"Contact not found"` if it doesn’t.
  */
 

  var contacts = {
    "Juan" : "6048030613",
    "Daniel" : "6048161571",
    "Pamela" : "6049689726"
  }

function findContact(checkProp){
    if (contacts.hasOwnProperty(checkProp)) { //hasOwnProperty 
        return contacts[checkProp] 
    }else{
        return "Contact not found"
    }
}
console.log("project " + findContact("Isa"))

