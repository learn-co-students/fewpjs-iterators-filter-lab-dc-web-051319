// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(function (driver){
    return driver.toUpperCase() === name.toUpperCase()
  })
}

function fuzzyMatch(drivers, closeName){
  let nameLength = closeName.length;
   return drivers.filter(function (driver) {
     return driver.slice(0, nameLength) === closeName;
   })
}

function matchName(drivers, name){
  return drivers.filter(function (driver){
    return driver.name.toUpperCase() === name.toUpperCase();
  })
}
