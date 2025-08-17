//nested array
//what is an array: An array is like a list that stores multiple values in a single variable.

var myPlants = [
    {
        type : "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ] 
    },
    {
        type : "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1]

//record colletion

var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA gold"
    }
}

console.log(JSON.stringify(collection))

//keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))//fancy way to make a copy of an object
console.log(collectionCopy)

function updateRecord(id, prop, value){
    if (value === ""){
        delete collection[id],[prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value
    }

    return collection
}
console.log(updateRecord(5439,"tracks", "ABBA")) 
