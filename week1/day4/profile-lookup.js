var contacts = [
    {
        "firstName" : "Akira" ,
        "lastName" : "Laine" ,
        "number" : "0543236543",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    }, 
    {
        "firstName" : "Harry" ,
        "lastName" : "Potter" ,
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]

    },
    {   
        "firstName" : "Sherlock" ,
        "lastName" : "Holmes" ,
        "number" : "0487345643",
        "likes" : ["Intriguing Cases", "Violin"]

    },
    {
        "firstName" : "Kristian" ,
        "lastName" : "Vos" ,
        "number" : "unknown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    },
]


function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property"
        } 
    }
    return "No such contacts" 
}

//first word is the name, and then the second property is going to return depending of what we ask, in the example below is "likes"
var data  = lookUpProfile("Akira", "address" )

console.log(data)
/*
i = 0; contacts[i -> 0] =  {
        "firstName" : "Akira" ,
        "lastName" : "Laine" ,
        "number" : "0543236543",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    }, object.firstName = "Akira", return object["number"] -> return "0543236543"

i = 1; contacts[i -> 1] = {
        "firstName" : "Harry" ,
        "lastName" : "Potter" ,
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]

    }, object.firstName = "Harry"
*/














