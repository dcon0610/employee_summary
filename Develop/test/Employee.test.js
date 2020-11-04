const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.Name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.Id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  console.log(e.Email)
  expect(e.Email).toBe(testValue);
});

test("Can get name via get Name()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  console.log(e.Name)
  expect(e.Name).toBe(testValue);
});

test("Can get id via get Id()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  console.log(e.Id)
  expect(e.Id).toBe(testValue);
});

test("Can get email via get Email()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.Email).toBe(testValue);
});

test("get Role() should return \"Employee\"", () => {
  const testValue = "employee";
  const e = new Employee("Alice", 1, "test@test.com");
  console.log(e.role)
  expect(e.role).toBe(testValue);
});
