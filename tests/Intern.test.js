const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization of object", () => {
        it("Should create a new instance of Intern with a name, id, email, and school when user provides necessary arguments", () => {
            const intern = new Intern("Tim", 55228, "timMember@me.com","Carnegie Mellon University");

            expect(intern.school).toEqual("Carnegie Mellon University");
        });

        it("Should throw an error if github is blank or not a string", () => {
            const newIntFunc = () => new Intern("Tim" , 55228, "timMember@me.com");

            expect(newIntFunc).toThrow();
        });
    });
        // could add tests for id length max and min, if specified by company
    describe("Tests methods on Intern and that they function as intended", () => {

        it("the getSchool() method should return the school assigned to the intern instance", () => {
            const intern = new Intern("Tim", 55228, "timMember@me.com","Carnegie Mellon University");
            const mock = intern.getSchool();
            
            expect(mock).toEqual(intern.school);
        });
        
        it("the getRole() method should return 'Intern' when called", () => {
            const intern = new Intern("Tim", 55228, "timMember@me.com","Carnegie Mellon University");
            const mock = intern.getRole();
            
            expect(mock).toEqual("Intern");
        });
    });
});