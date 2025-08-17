//while loop
var myArray = []
var i = 0 
while (i < 5){
    myArray.push(i)//push adds one or more elements to the end of the array.
    i++
}

console.log(myArray)


//iterate with for loops


var ourArray = []

for (var i = 1; i < 6; i++){
    ourArray.push(i)//if we use unshift, its backwards(5,4,3,2,1)
}
console.log(ourArray)


//even numbers
var theArray = []

for (var a = 0;a < 10; a+=2 ){
    theArray.push(a)
}

console.log(theArray)

//odd numbers

var theArrayodd = []
for (var a = 1;a < 10; a+=2 ){
    theArrayodd.push(a)
}

console.log(theArrayodd)

//backwards

var ourArrayback = []
for (var e = 9;e > 0;e-=2){//this is gna stop at 0, unlike the others
    ourArrayback.push(e)
}
console.log("backwards " + ourArrayback)

//iterate through an array with a for loop,adding preexising numbers into the array


var myArr = [ 2, 3, 4, 5, 6 ]
var total = 0
for (var i = 0; i < myArr.length; i++ ){ //the length is 5
    total += myArr[i] //because there is only one group, it choses a number from the group.the total also adds up
    console.log(myArr[i])
}
console.log(total)

// total = 0
// i = 0; myArr[0] = 2; total = 2
// i = 1; myArr[1] = 3; total = 2 + 3
// i = 2; myArr[2] = 4; total = 5 + 4
// i = 3; myArr[3] = 5; total = 9 + 5
// i = 4; myArr[4] = 6; total = 14 + 6
// i = 5; termina
// total = 20


//nesting for loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]; //i refers to the group, and j refers to the number inside the group
        }
    }
    return product
}
// everything multiples with everything. 

var product = multiplyAll([[1,2],[3,4],[5,6,7]]) //this is an array of arrays

console.log(product)