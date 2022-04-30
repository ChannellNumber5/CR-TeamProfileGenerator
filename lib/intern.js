const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        if (school === undefined || typeof school !== "string") {
            throw new Error("Expected school to be a string");
        }
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log("Intern");
    }
}

module.exports = Intern;