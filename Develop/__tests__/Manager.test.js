const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe ("create instance of Manager", () => {
        it("should take in Manager as object", () => {
            const manager = new Manager();
            expect(typeof(manager)).toBe("object");
        });
    });

    describe ("set officeNumber", () => {
        it("should set officeNumber using constructor arguments", () => {
            const testCase = 123;
            const manager = new Manager("Boo", 101, "test@email.com", testCase);
            expect(manager.officeNumber).toEqual(testCase);
        })
    });

    describe ("getOfficeNumber()", () => {
        it("should return officeNumber from getOfficeNumber()", () => {
            const testCase = 123;
            const manager = new Manager("Boo", 101, "test@email.com", testCase);
            expect(manager.getOfficeNumber()).toBe(testCase);
        })
    });

    describe ("getRole()", () => {
        it("should return 'Manager' from getRole()", () => {
            const testCase = "Manager";
            const manager = new Manager("Boo", 101, "test@email.com", 123);
            expect(manager.getRole()).toBe(testCase);
        })
    });

});

