const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, offiNumber) {
        super(name, id, email);
        this.offiNumber = offiNumber;
    }
    getOffiNumber() {
        return this.offiNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;