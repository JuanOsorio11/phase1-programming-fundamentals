var myArray1 =[[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]]

var myData=myArray1[2][1]//first number is the the group, then the 2nd one is the number inside the group

console.log(myData)

var myArray = ["apple","mango","grape"]

var ourArray= myArray.pop()

console.log(ourArray)
console.log(myArray)

var myArray2= [["niga1",20],["push",2]]

var ourArray1=myArray2.pop()

console.log(myArray2)


//shift is the opposite of pop. pop is last and shift is the first one, they both remove, unshift can bring it back or smth else
var myArray3= ["red","blue","yellow"]
myArray3.shift()
myArray3.unshift("purple")
console.log(myArray3)

