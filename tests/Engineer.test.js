const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization of object", () => {
        it("Should create a new instance of Engineer with a name, id, email, and github username when user provides necessary arguments", () => {
            const engineer = new Engineer("Tim", 55228, "timMember@me.com","timsGit4Code");

            expect(engineer.github).toEqual("timsGit4Code");
        });

        it("Should throw an error if github is blank or not a string", () => {
            const newEngFunc = () => new Engineer("Tim" , 55228, "timMember@me.com");

            expect(newEngFunc).toThrow()
        });
    });
        // could add tests for id length max and min, if specified by company
    describe("Tests methods on Engineer and that they function as intended", () => {

        it("the getGithub() method should return the github username assigned to the engineer instance", () => {
            const engineer = new Engineer("Tim", 55228, "timMember@me.com","timsGit4Code");
            const mock = engineer.getGithub();
            
            expect(mock).toEqual(engineer.github);
        });
        
        it("the getRole() method should return 'Engineer' when called", () => {
            const engineer = new Engineer("Tim", 55228, "timMember@me.com", "timsGit4Code");
            const mock = engineer.getRole();
            
            expect(mock).toEqual("Engineer");
        });
    });
});