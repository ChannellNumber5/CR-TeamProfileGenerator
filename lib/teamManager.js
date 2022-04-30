const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        if (officeNumber === undefined || typeof officeNumber !== "number") {
            throw new Error("Expected office number to be a number");
        }

        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log("Manager");
    }
}

module.exports = Manager;