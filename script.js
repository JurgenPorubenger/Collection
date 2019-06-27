// // Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//     for (let key in collection) {
//         if(key==id) {
//           for (let key2 in collection[key]) {
//                 if (key2=="tracks"&&prop=="tracks"&&value!="") {
//                   collection[key][key2].push(value);
//                   console.log(collection[key]);
//                 } else if (key2=="tracks"&&prop=="tracks"&&value=="") {
//                   delete collection[key][key2];
//                   console.log(collection[key]);
//                 } else if (key2=="album"&&prop=="album"){
//                 collection[key]["album"]=value;
//                 console.log(collection[key]);
//               } else if (key2=="artist"&&prop=="artist"){
//                 collection[key]["artist"]=value;
//                 console.log(collection[key]);
//               } else if (!collection[key]["tracks"]) {
//                   let track = [];
//                   track.push(value);
//                   collection[key]["tracks"]=track;
//                   console.log(collection[key]);
//               }
//         }
//       }
//     }
//   }
// //   return collection;


// updateRecords(2548, "artist", "");

function isPrime(num) {
  if(num < 2) return false;
  for (let i=2; i<num; i++) {
      if(num%i==0)
          return false;
  }
  return num;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let i=0; i<arr.length; i++) {
  if (isPrime(arr[i])) {
    numberSum()
    // let arr2 = [];
    // arr2.push(arr[i]);
    // console.log('arr2');
    console.log(isPrime(arr[i]));
  }
 }
// let positiveArr = arr.filter(function(number) {
//   if (number/number==1&&)
//   return number > 0;
// });



// console.log(isPrime(7));
function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}