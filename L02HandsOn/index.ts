// This is the interface Person from HandsOn-1
interface Person {
    firstName: string;
    lastName?: string;
}

// Entry class that uses Person, and has a firstName, lastName and birthday
class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

// Generic function that sorts any array and returns it
function sort<T>(argument: T[]): T[] {
    return argument.sort();
}