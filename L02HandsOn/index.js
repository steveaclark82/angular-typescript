"use strict";
// Entry class that uses Person, and has a firstName, lastName and birthday
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    return Entry;
}());
// Generic function that sorts any array and returns it
function sort(argument) {
    return argument.sort();
}
