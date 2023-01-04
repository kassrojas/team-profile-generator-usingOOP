const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe ("create instance of Employee", () => {
        it ("should take in Employee as object", () => {
            const employee = new Employee();
            expect (typeof(employee)).toBe("object");
        });
    });

    describe ("setting name", () => {
        it ("should set name using constructor arguments", () =>{
            const testCase = "Boo";
            const employee = new Employee(testCase);
            expect (employee.name).toEqual(testCase);
        });
    });

    describe ("setting id", () => {
        it ("should set id using constructor arguments", () =>{
            const testCase = 101;
            const employee = new Employee("Boo", testCase);
            expect (employee.id).toEqual(testCase);
        });
    });

    describe ("setting email", () => {
        it ("should set email using constructor arguments", () =>{
            const testCase = "test@email.com";
            const employee = new Employee("Boo", 101, testCase);
            expect (employee.email).toEqual(testCase);
        });
    });
        
    describe ("getName()", () => {
        it ("should get name using getName()", () =>{
            const testCase = "Boo";
            const employee = new Employee(testCase);
            expect (employee.getName()).toBe(testCase);
        });
    });
       
    describe ("getId()", () => {
        it ("should get id using getId()", () =>{
            const testCase = 101;
            const employee = new Employee("Boo", testCase);
            expect (employee.getId()).toBe(testCase);
        });
    });

    describe ("getEmail()", () => {
        it ("should get email using getEmail()", () =>{
            const testCase = "test@email.com";
            const employee = new Employee("Boo", 101, testCase);
            expect (employee.getId()).toBe(testCase);
        });
    });

    describe ("getRole()", () => {
        it ("should get 'Employee' using getRole()", () =>{
            const testCase = "Employee";
            const employee = new Employee("Boo", 101, "test@email.com");
            expect (employee.getRole()).toBe(testCase);
        });
    });
    

});
