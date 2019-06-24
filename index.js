import { listenerCount } from "cluster";

// Code your solution here
function findMatching(drivers, searchTerm) {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === searchTerm.toLowerCase()
  });
}

function fuzzyMatch(drivers, searchTerm) {
  let lengthOfName = searchTerm.length;
  return drivers.filter((driver) => {
    return driver.slice(0, lengthOfName) == searchTerm;
  });
}

function matchName(drivers, searchTerm) {
  return drivers.filter((driver) => {
    return driver.name.toLowerCase() === searchTerm.toLowerCase();
  });
}