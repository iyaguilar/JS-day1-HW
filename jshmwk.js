//1.
///Write a function that takes in the string and the list of dog names, loops through 
//the list and checks that the current name is in the string passed in. The output should be:
//Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const checkDogNames = (string, names) => {
    names.forEach(name => {
        if
(string.toLowerCase().includes(name.toLowerCase())) {
            console.log('Matched '+ name);
        }else{
            console.log("No Match");
        } 
    });
};

checkDogNames(dog_string,dog_names);
console.log(dog_string);



2.
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvenIndex = (arr) => {
    return arr.map((element, index) => {
        if (index % 2 ===0) {
            return "even index";
        }else{
            return element;

        }
    });
};


let arr = ["Rodger", "Trucks", "Goku", "Reboot", "Max", "Baseball"]
let result = replaceEvenIndex(arr);
console.log(result)


 


CODEWARSPROBLEMS:
1. //FIND NUMBERS WHICH ARE DIVISIBLE BY GIVEN NUMBER
 
function divisibleBy(numbers, divisor){
    return numbers.filter((number) => number % divisor === 0)
}
2. //IS THE STRING UPPERCASE

string.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}
 


