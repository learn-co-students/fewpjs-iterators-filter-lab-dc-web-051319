// Code your solution here

let findMatching = function(drivers, str) {
    let result = drivers.filter(driver => {
        return driver.toUpperCase() === str.toUpperCase()
    });

    return result
}

let fuzzyMatch = function(drivers, str) {
    let result = drivers.filter(driver => {
        return driver.slice(0, str.length) === str
    })

    return result
}

let matchName = function(drivers, str) {
    let result = drivers.filter(driver => driver.name === str)

    return result
}