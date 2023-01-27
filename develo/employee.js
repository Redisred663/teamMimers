class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
   
    getInfo() {
        return this.name, this.id, this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;