// Code your solution here


// Write a Function To Case-insensitively Match strings
// Write findMatching- This function takes an array of drivers and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.


function findMatching(array, string) {
    return array.filter( name => name.toLowerCase() === string.toLowerCase() );
};
// Write a Function To Partially Match Substrings
// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(array, string) {
    return array.filter( name => {
        let stringInName = false
        for (let i = 0; i < string.length; ++i) {
            if (string[i] === name[i])
                stringInName = true
            else 
                return false
        }
        return stringInName
    })
}

// Write a Function To Match object Values To a Provided string
// Write matchName - This function takes an array of drivers and a string as arguments. 
// In this function, each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.


function matchName(array, string) {
    return array.filter( driver => driver.name.toLowerCase() === string.toLowerCase() );
};