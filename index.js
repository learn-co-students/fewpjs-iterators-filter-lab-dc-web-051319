// Code your solution here

function findMatching(array, name) {
  return array.filter(person => person.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(name => name.startsWith(letters))
}

function matchName(drivers, name) {
  return drivers.filter(function(driver_obj) {
    return driver_obj.name === name
  })
}
