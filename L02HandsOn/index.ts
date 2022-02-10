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

let newPerson = new Entry('Albert', 'Einstein', new Date('5/14/1879'))

console.log('First Name: ' + newPerson.firstName + ', Last Name: ' + newPerson.lastName + ', Birthday: ' + newPerson.birthday);

// Part 2

let numbers:Array<string> = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];

function sortArray<S>(array: S[]): S[] {
  return array.sort();
}

console.log('Array before sorting: ' + numbers);
console.log('Array after sorting: ' + sortArray(numbers));
