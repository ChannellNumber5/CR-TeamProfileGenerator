const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization of object", () => {
        it("Should create a new instance of Employee with a name, id and  email, when user provides necessary arguments", () => {
            const employee = new Employee("Tim", 55228, "timMember@me.com");

            expect(employee.name).toEqual("Tim");
            expect(employee.id).toEqual(55228);
            expect(employee.email).toEqual("timMember@me.com");
        });

        it("Should throw an error if no arguments are input", () => {
            const newEmpFunction = () => new Employee();

            expect(newEmpFunction).toThrow();
        });

        it("Should throw an error if name provided is not a string", () => {
            const newEmpFunc = () => new Employee(55228 , 55228, "timMember@me.com");

            const err = new Error("Expected parameter in name to be a string");
            expect(newEmpFunc).toThrow(err)
        });

        it("Should throw an error if id provided is not a number", () => {
            const newEmpFunc = () => new Employee("Tim" , "TimsID", "timMember@me.com");

            const err = new Error("Expected parameter in id to be number");
            expect(newEmpFunc).toThrow(err)
        });

        it("Should throw an error if id provided email is blank", () => {
            const newEmpFunc = () => new Employee("Tim" , "TimsID", );

            const err = new Error("Expected email address to be included");
            expect(newEmpFunc).toThrow(err)
        });
    });
        // could add tests for id length max and min, if specified by company
    describe("Tests methods on Employee and that function as intended", () => {
        it("the getName() method should return name assigned to employee instance", () => {
            const employee = new Employee("Tim", 55228, "timMember@me.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation();
            employee.getName();
            
            expect(mock).toBeCalledWith(employee.name);
            mock.mockRestore();
        });

        it("the getId() method should return the id assigned to employee instance", () => {
            const employee = new Employee("Tim", 55228, "timMember@me.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation();
            employee.getId();
            
            expect(mock).toBeCalledWith(employee.id);
            mock.mockRestore();
        });

        it("the getEmail() method should return name assigned to employee instance", () => {
            const employee = new Employee("Tim", 55228, "timMember@me.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation();
            employee.getEmail();
            
            expect(mock).toBeCalledWith(employee.email);
            mock.mockRestore();
        });
        
        it("the getRole() method should return employee when called", () => {
            const employee = new Employee("Tim", 55228, "timMember@me.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation();
            employee.getRole();
            
            expect(mock).toBeCalledWith("Emloyee");
            mock.mockRestore();
        });
    });
});