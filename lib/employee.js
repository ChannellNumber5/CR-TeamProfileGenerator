class Employee {
    constructor(name, id, email) {
        if (name === undefined && id === undefined && email === undefined) {
            throw new Error("Expected employee name, id and email");
        }

        if (name === undefined || typeof name !== "string") {
            throw new Error("Expected employee name to be a string");
        }

        if (id === undefined || typeof id !== "number") {
            throw new Error("Expected employee id to be a number");
        }

        if (email === undefined || typeof email !== "string") {
            throw new Error("Expected employee email to be a string");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;