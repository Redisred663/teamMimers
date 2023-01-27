const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitty) {
        super(name, id, email);

        this.gitty = gitty;
    }

    getGitty() {
        return this.gitty;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;