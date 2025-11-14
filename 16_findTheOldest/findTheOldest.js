const findTheOldest = function(people) {
    const calcAge = (person) => {
        const CurrentYear = 2025;
        if( person.yearOfDeath ) return person.yearOfDeath - person.yearOfBirth;
        else return CurrentYear - person.yearOfBirth;
    };
    return oldestPerson = people.reduce((oldest, person) => {
        if( !oldest ) return person;
        if( calcAge(oldest) >= calcAge(person) ) return oldest;
        else return person;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
