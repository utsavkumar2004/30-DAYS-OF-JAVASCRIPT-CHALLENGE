// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Usage
const person = new Person('John Doe', 30);
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    setAge(age) {
        this.age = age;
    }
}

// Usage
const person = new Person('John Doe', 30);
person.setAge(31);
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 31 years old.


// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

// Usage
const student = new Student('Jane Smith', 22, '123456789');
console.log(student.getStudentId()); // Output: 123456789


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

// Usage
const student = new Student('Jane Smith', 22, '123456789');
console.log(student.greet()); // Output: Hello, my name is Jane Smith and I am 22 years old. My student ID is 123456789.

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return 'Welcome!';
    }
}

// Usage
console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
    static numberOfStudents = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.numberOfStudents++;
    }

    static getNumberOfStudents() {
        return Student.numberOfStudents;
    }
}

// Usage
const student1 = new Student('Jane Smith', 22, '123456789');
const student2 = new Student('John Doe', 24, '987654321');
console.log(Student.getNumberOfStudents()); // Output: 2


// Task 7: Add a getter method to the Person class to return the full name (assume a firstliame and lastlame property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Usage
const person = new Person('John', 'Doe');
console.log(person.fullname);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastflame). Update the name using the setter and log the updated full name.
class Person1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    set fullname(name) {
        const parts = name.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

// Usage
const person1 = new Person('John', 'Doe');
person1.fullname = 'Jane Smith';
console.log(person1.fullname);


// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}.`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
// Create an instance of the Account class
const account = new Account(1000);

// Deposit money
account.deposit(500); // Output: Deposited: $500. New Balance: $1500.
console.log(`Balance after deposit: $${account.getBalance()}`); // Output: Balance after deposit: $1500

// Withdraw money
account.withdraw(200); // Output: Withdrew: $200. New Balance: $1300.
console.log(`Balance after withdrawal: $${account.getBalance()}`); // Output: Balance after withdrawal: $1300

// Attempt an invalid deposit
account.deposit(-50); // Output: Deposit amount must be positive.
console.log(`Balance after invalid deposit: $${account.getBalance()}`); // Output: Balance after invalid deposit: $1300

// Attempt an invalid withdrawal
account.withdraw(2000); // Output: Invalid withdrawal amount.
console.log(`Balance after invalid withdrawal: $${account.getBalance()}`); // Output: Balance after invalid withdrawal: $1300

// Get the current balance
console.log(`Final Balance: $${account.getBalance()}`); // Output: Final Balance: $1300


