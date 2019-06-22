// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const other_drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.startsWith(string)
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver_obj => {
        return driver_obj["name"] === name
    })
}

findMatching(drivers)