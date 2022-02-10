"use strict";
// ContactCard class - implements Person and Contact interfaces:
var ContactCard = /** @class */ (function () {
    // Constructor that uses firstName and phoneNumber:
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    // Method that sends message with the first name and phone number
    ContactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    };
    return ContactCard;
}());
// newPerson instance and calling sendMessage()
var newPerson = new ContactCard('Clarke', 55512345678);
newPerson.sendMessage();
