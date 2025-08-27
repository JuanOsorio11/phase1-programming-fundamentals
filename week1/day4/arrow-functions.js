//use arrow functions to write concise anonymous functions
/*
var magic = function(){
    return new Date()
} better/shorter version below
*/

const magic = () => new Date()

//write arrow function with parameters

/*
var myConcat = function(arr1,arr2) {
    return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]))
below new function using arrows
*/
const myConcat = (arr1,arr2) => arr1.concat(arr2)//concat is used for combining arrays. the answer will be [1,2,3,4,5]


console.log(myConcat([1, 2], [3, 4, 5]))

//write higher oder arrow functions/ this example is not to understand map, is to understand how you can use arrow to make things shorter.

const realNumberArray = [4, 5.6, -9.8, 3.13, 42, 6, 8.34, -2]
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
        return squaredIntegers
}
const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers) 

//write higher order Arrow Functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value
    }
})()
console.log(increment(5, 2))
console.log(increment(5))//this is to add two numbers

//- Convert function `add(a, b)` to an arrow function.  
//- Write `const square = x => x * x`.  

const addition = (a, b) => a + b

console.log("1 + 3 = " + addition(1, 3))
//Write `const square = x => x * x`.

const multiplication = (c, d) => c * d

console.log("5 + 3 = " + multiplication(5, 3))