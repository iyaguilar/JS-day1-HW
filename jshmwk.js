1.
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (inputString, namesList) => {
    for (let i = 0; i < namesList.length; i++) {
        let currentName = namesList[i];
        if (inputString.toLowerCase().includes(currentName.toLowerCase())){
            console.log(`Matched ${currentName}`);
        } else {
            console.log("No Match");
        }
    }
}

//Call method here with parameters
findWords(dog_string,dog_names);


2.
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvens = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}
let arr = ["Rodger", "Trucks", "Goku", "Reboot", "Max", "Baseball"]
replaceEvens(arr);
console.log(arr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//CODEWARS PROBLEMS:
//1. SUM OF POSITIVE
//const positiveSum = function(arr) {
 
 //   let sum = 0;
  
  
 //   for (let i = 0; i < arr.length; i++) {
      
 //     if (arr[i] > 0) {
       
  //      sum += arr[i];
//      }
 //   }
  
   
  //  return sum;
 // };
  
 // const numbersArray = [1, -4, 7, 12];
//  const result = positiveSum(numbersArray);
//  console.log(result); 

//2. MULTIPLY
//function multiply(a, b){
   // return a * b
//}
//const result = multiply(3, 4);
//console.log(result); 
 //   
