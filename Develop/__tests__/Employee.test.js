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
            const test = "Boo";
            const employee = new Employee(test);
            expect (employee.name).toBe(test);
        });
    });

    describe ("setting id", () => {
        it ("should set id using constructor arguments", () =>{
            const test = 101;
            const employee = new Employee("Boo", test);
            expect (employee.id).toBe(test);
        });
    });

    describe ("setting email", () => {
        it ("should set email using constructor arguments", () =>{
            const test = "test@email.com";
            const employee = new Employee("Boo", 101, test);
            expect (employee.email).toBe(test);
        });
    });
        
    describe ("getName()", () => {
        it ("should get name using getName()", () =>{
            const test = "Boo";
            const employee = new Employee(test);
            expect (employee.getName()).toBe(test);
        });
    });
       
    describe ("getId()", () => {
        it ("should get id using getId()", () =>{
            const test = 101;
            const employee = new Employee("Boo", test);
            expect (employee.getId()).toBe(test);
        });
    });

    describe ("getId()", () => {
        it ("should get id using getId()", () =>{
            const test = 101;
            const employee = new Employee("Boo", test);
            expect (employee.getId()).toBe(test);
        });
    });

    describe ("getId()", () => {
        it ("should get Employee using getRole()", () =>{
            const test = "Employee";
            const employee = new Employee("Boo", 101, "test@email.com");
            expect (employee.getRole()).toBe(test);
        });
    });
    

});
