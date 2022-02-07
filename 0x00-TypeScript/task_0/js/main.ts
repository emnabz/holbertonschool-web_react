interface student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const student1: student = {
    firstName: 'Emna',
    lastName: 'Bouaziz',
    age: 22,
    location: 'Tunis, Tunisia',
};

const student2: student = {
    firstName: 'Jhon',
    lastName: 'whatever',
    age: 5,
    location: 'Heaven',
};

const studentsList: student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tHeader: HTMLTableSectionElement = table.createTHead();
const Headerrow: HTMLTableRowElement = tHeader.insertRow(0);
const cellOne: HTMLTableCellElement = Headerrow.insertCell(0);
cellOne.innerText = 'firstName';
const cellTwo: HTMLTableCellElement = Headerrow.insertCell(1);
cellTwo.innerText = 'lastName';
let i: number = 1;
studentsList.forEach((Student: student) => {
    const row: HTMLTableRowElement = table.insertRow(i);
    const firstName: HTMLTableCellElement = row.insertCell(0);
    firstName.innerText = Student.firstName;
    const lastName: HTMLTableCellElement = row.insertCell(1);
    lastName.innerText = Student.lastName;
    i += 1;
})

document.body.appendChild(table);
