const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe ("create instance of Intern", () => {
        it("should take in Intern as object", () => {
            const intern = new Intern();
            expect(typeof(intern)).toBe("object");
        });
    });

    describe ("set school", () => {
        it("should set school using constructor arguments", () => {
            const testCase = "schoolName";
            const intern = new Intern("Boo", 101, "test@email.com", testCase);
            expect(intern.school).toEqual(testCase);
        })
    });

    describe ("getSchool()", () => {
        it("should return school from getSchool()", () => {
            const testCase = "schoolName";
            const intern = new Intern("Boo", 101, "test@email.com", testCase);
            expect(intern.getSchool()).toBe(testCase);
        })
    });

    describe ("getRole()", () => {
        it("should return 'Intern' from getRole()", () => {
            const testCase = "Intern";
            const intern = new Intern("Boo", 101, "test@email.com", "someUserName");
            expect(intern.getRole()).toBe(testCase);
        })
    });


});
