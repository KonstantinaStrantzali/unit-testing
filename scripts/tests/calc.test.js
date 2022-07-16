const addition = require("../calc");
const subtract = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    
    describe("Subtract function", () => {
        test("should return 9 for 3 * 3", () => {
            expect(subtract(3, 3)).toBe(9);
        });

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});