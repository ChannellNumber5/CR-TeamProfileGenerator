const Manager = require("../lib/teamManager");

describe("Manager", () => {
    describe("Initialization of object", () => {
        it("Should create a new instance of Manager with a name, id, email and office number when user provides necessary arguments", () => {
            const manager = new Manager("Tim", 55228, "timMember@me.com", 45);

            expect(manager.officeNumber).toEqual(45);
        });

        it("Should throw an error if office number is blank or not a string", () => {
            const newMgrFunc = () => new Manager("Tim" , 55228,"timMember@me.com", );

            expect(newMgrFunc).toThrow()
        });
    });
        // could add tests for id length max and min, if specified by company
    describe("Tests methods on Manager and that they function as intended", () => {
        
        it("the getRole() method should return 'Manager' when called", () => {
            const manager = new Manager("Tim", 55228, "timMember@me.com", 45);
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation();
            manager.getRole();
            
            expect(mock).toBeCalledWith("Manager");
            mock.mockRestore();
        });
    });
});