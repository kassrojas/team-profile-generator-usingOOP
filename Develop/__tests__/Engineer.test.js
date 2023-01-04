const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe ("create instance of Engineer", () => {
        it("should take in Engineer as object", () => {
            const engineer = new Engineer();
            expect(typeof(engineer)).toBe("object");
        });
    });

    describe ("set github", () => {
        it("should set github using constructor arguments", () => {
            const testCase = "testUserName";
            const engineer = new Engineer("Boo", 101, "test@email.com", testCase);
            expect(engineer.github).toEqual(testCase)
        })
    })

});
