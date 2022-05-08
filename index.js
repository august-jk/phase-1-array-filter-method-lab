// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(drivers, name) {
    let newArr = drivers.filter(function(drivers){
        return drivers.toLowerCase() === name.toLowerCase()
    })
    return newArr
}

function fuzzyMatch(drivers, query) {
    let newArr = drivers.filter(function(drivers) {
      return drivers.toLowerCase().startsWith(query.toLowerCase())
    })
    return newArr
}
function matchName(drivers, name) {
    let newArr = drivers.filter(function(drivers){
        return drivers.name === name
    })
    return newArr
}