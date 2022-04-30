const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        if (github === undefined || typeof github !== "string") {
            throw new Error("Expected github username to be a string");
        }

        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log("Engineer");
    }
}

module.exports = Engineer;