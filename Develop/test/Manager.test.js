const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager(testValue,"Foo", 1, "test@test.com"); //officeNumber, name, id, email
  expect(e.officeNumber).toBe(testValue); 
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.Role).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager(testValue, "Foo", 1, "test@test.com"); //officeNumber, name, id, email
  expect(e.OfficeNumber).toBe(testValue);
});
