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