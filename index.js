// Code your solution here

function findMatching (drivers, string) {
    return drivers.filter(function (driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  }
  
  function fuzzyMatch (drivers, letters) {
    let lengthOfName = letters.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === letters;
    });
  }
  
  function matchName (drivers, string) {
    return drivers.filter(function (driver) {
      return driver.name.toLowerCase() === string.toLowerCase();
    });
  }