//this converts a string to an integer

function convertToInteger(str) {
    return parseInt(str)
}
//parseInt is the code to return string to number
console.log(convertToInteger("56"))

//parseint function with a radix

function convertToINteger(str) {
    return parseInt(str, 2)

}
var answer = convertToInteger("10011")
console.log(answer) //convert to binary

