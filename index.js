// Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

// function fuzzyMatch(drivers, string) {
  
  
  
// }

function findMatching(drivers, name)
{
  return drivers.filter(function(driverName)      
  { return driverName.toLowerCase() === name.toLowerCase();        
  });

}
function fuzzyMatch(drivers, str) {
  let len_str = str.length 
  let matches = drivers.filter(driver => { 
    return driver.startsWith(str)
  })

 return matches
}


function matchName(drivers, string){
  
  let matches = drivers.filter(driver => {
    
    return (driver.name === string) 
    
  })
  
  return matches 
  
}


// ### Write a Function To Match `object` Values To a Provided `string`

// Write `matchName` - This function takes an array of `drivers` and a `string` as
// arguments. In this function, each element of the `drivers` array is a
// JavaScript object that has a property of `name`. The function should return
// each element whose `name` property matches the provided `string` argument.
