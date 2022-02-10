"use strict";
// ContactCard class - implements Person and Contact interfaces:
class ContactCard {
    // Constructor that uses firstName and phoneNumber:
    constructor(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    // Method that sends message with the first name and phone number
    sendMessage() {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    }
}
// newPerson instance and calling sendMessage()
let newPerson = new ContactCard('Clarke', 55512345678);
newPerson.sendMessage();
