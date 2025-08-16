var ourDog= { // this is how u create an object
    "name": "Camper",
    "legs" : 4,
    "Tails" : 1,
    "friends": ["everything!"]
}

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatvalue = testObj.hat //this is gna be "ballcap "
var shirtValue = testObj.shirt //this is gna be "jersey"

//this is another way to assigned smth. in the case above this text, i use .hat, on the case below i can just put []. and it works the same
var testObj2 = {
    "an entree":"hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj2["an entree"]
var drinkValue = testObj2['the drink']

var testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "unitas"
}

var playerNumber = 16;                        //so because playerNumber is 16, then testObj3 is set to 16, and 16 is "montana"
var player = testObj3[playerNumber]


//updating object properties

var ourDog1 = {
    "name":"coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}

ourDog1.name = "happy Coder"


//new properties to an object

var ourDog2 = {
    "name":"coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}

ourDog2['bark'] = "woof!"

//delete properties from an object

var ourDog3 = {
    "name":"coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}

delete ourDog3.tails

//using object for lookups
function phoneticLookup(val) {
    var result = "";


    var lookup = { // instead of doing the switch thing, we can do an object
        "alpha" : "Adams" ,
         "bravo" : "Boston",
         "charlie" : "Chicago",
         "delta" : "Denver",
         "echo" : "Easy",
         "foxtrot" : "Frank"
        }
        result = lookup[val]
        return result
}

console.log(phoneticLookup("alpha"))

var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
}

function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "not Found"
    }
}

console.log(checkObj(10)) //use "" in this situation cuz then it doesnt work

//manipulating complex objects

var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "formats" : [
            "cd",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist" : "Beau Carnes",
        "title" : "cereal Man",
        "release_year" : 2003,
        "formats" : [
            "youtube video"
        ]
    }
]

//nested objects

var myStorage = {
    "car": {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents)
//if there a space on a notation then [] this is used, set a new variable, then myStorage.car.inside        multiple things to get to glove box
