function determineAge(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = 2025;
    }
    person.age = person.yearOfDeath - person.yearOfBirth;

    return person.age;
}

const findTheOldest = function(arr) {
    determineAge(arr[0]);
    return arr.reduce((previous, current) => {
        const age = determineAge(current);
        if (age > previous.age) {
            return current;
        } else return previous;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
