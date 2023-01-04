const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe ("create instance of Engineer", () => {
        it("should take in Engineer as object", () => {
            const engineer = new Engineer();
            expect(typeof(engineer)).toBe("object");
        });
    });

    describe ("set github", () => {
        it("should set github username using constructor arguments", () => {
            const testCase = "someUserName";
            const engineer = new Engineer("Boo", 101, "test@email.com", testCase);
            expect(engineer.github).toEqual(testCase);
        })
    });

    describe ("getGithub()", () => {
        it("should return github username from getGithub()", () => {
            const testCase = "someUserName";
            const engineer = new Engineer("Boo", 101, "test@email.com", testCase);
            expect(engineer.getGithub()).toBe(testCase);
        })
    });

    describe ("getRole()", () => {
        it("should return 'Engineer' from getRole()", () => {
            const testCase = "Engineer";
            const engineer = new Engineer("Boo", 101, "test@email.com", "someUserName");
            expect(engineer.getRole()).toBe(testCase);
        })
    });

});
