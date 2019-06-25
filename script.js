// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
//   id=collection;
    for (let key in collection) {
        if(key==id) {
            
            for (let key2 in collection[key]) {
                console.log(collection[key]);
            }
            // if(collection[key].tracks!=prop&&prop) {
            //     // collection.album=prop;
            //     console.log(collection[key]);
            // }
        }
        
    }
  
//   return collection;
}

// Alter values below to test your code
updateRecords(2468, "artist", "ABBA");
