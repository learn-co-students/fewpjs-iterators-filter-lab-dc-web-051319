// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.charAt(0).toLowerCase() === name.charAt(0).toLowerCase())
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}