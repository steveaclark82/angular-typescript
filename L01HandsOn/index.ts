// Interface Person: required firstName string, optional lastName string
interface Person {
    firstName: string;
    lastName?: string;
}

// Interface Contact: required phoneNumber number, optional email string
interface Contact {
    phoneNumber: number;
    email?: string;
}

// ContactCard class - implements Person and Contact interfaces:
class ContactCard implements Person, Contact {
    firstName: string;
    phoneNumber: number;

    // Constructor that uses firstName and phoneNumber:
    constructor(firstName: string, phoneNumber: number) {
        this.firstName = firstName
        this.phoneNumber = phoneNumber
    }

    // Method that sends message with the first name and phone number
    sendMessage(): void {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber)
    }
}

// newPerson instance and calling sendMessage()
let newPerson = new ContactCard('Frankeesha', 55512345678);
newPerson.sendMessage();