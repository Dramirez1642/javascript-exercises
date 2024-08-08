const findTheOldest = function(people) {
    let currentYear = (new Date()).getFullYear()
    console.log(currentYear)
    people.sort(
        function(a,b) {
            let aCurrentAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth
            let bCurrentAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth
            return bCurrentAge - aCurrentAge
        }
        )

    return people[0]
};
// Do not edit below this line
module.exports = findTheOldest;
