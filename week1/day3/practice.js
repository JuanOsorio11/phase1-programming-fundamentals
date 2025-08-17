/*1. Create an array `matrix` representing a 3x3 grid of numbers.
2. Access and print the value in the second row, third column.
*/

var matrix = [[1,2,3], [4,5,6], [7,8,9]]

var mydata= matrix[1][0]//first number is the the group, then the 2nd one is the number inside the group

console.log(mydata)


//loops

var myArray = []
var i = 0
while (i <= 5){
    myArray.push(i)
    i++
}

console.log(myArray)

var ourArray = []

for (var i = 2; i <= 20; i +=2) {
    ourArray.push(i)
}

console.log(ourArray)


var cords = [[0,2] [0,2]]

for (var i = 0; i <= 2; i++){
    for (var j = 0;j <= 2;j++){
        console.log("("+ i + "," + j + ")")
    }
}
