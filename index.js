// Code your solution here
//give a list with the function of finding a name given, the function would iterates through list and filters out matches based on drivername,once found it ignoring case case_sensitivity by putting both to lowercase.
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

// find the partial match of a name in a list of names.
function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

// match values of an Obj to a provided string
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
