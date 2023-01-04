const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe ("instantiate Employee", () => {
        it ("should take in Employee as object", () => {
            
            const employee = new Employee();
            
            expect (typeof(employee)).toBe("object");
        });
        
        it ("should set name using constructor arguments", () =>{
            const name = "Kass";
            const employee = new Employee(name);
            expect (employee.name).toBe(name);
        });
    })

});
