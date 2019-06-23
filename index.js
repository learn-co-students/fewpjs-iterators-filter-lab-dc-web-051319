// Code your solution here
function findMatching(drivers,name){
  return drivers.filter(drivers => drivers.toLowerCase()  === name.toLowerCase() )

}
function fuzzyMatch(drivers,name){
  return drivers.filter(function (driverName) {
    return driverName.slice(0, name.length) === name;
  });
}

function matchName(drivers,name){
  return drivers.filter(drivers => drivers.name === name )
}
