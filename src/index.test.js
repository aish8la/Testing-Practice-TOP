import * as funcs from "./index.js";

test("Capitalize first character string", () => {
    expect(funcs.capitalize('hello World')).toBe('Hello World');
    expect(funcs.capitalize('   hello World ')).toBe('Hello World');
    expect(funcs.capitalize('{hello: world}')).toBe('{hello: world}');
    expect(funcs.capitalize("")).toBeUndefined();
    expect(funcs.capitalize({hello: "world"})).toBeUndefined();
});

test("Reverses string", () => {
    expect(funcs.reverseString("Hello World")).toBe("dlroW olleH");
    expect(funcs.reverseString('   Hello World ')).toBe(' dlroW olleH   ');
    expect(funcs.reverseString('{hello: world}')).toBe('}dlrow :olleh{');
    expect(funcs.reverseString("")).toBeUndefined();
    expect(funcs.reverseString({hello: "world"})).toBeUndefined();
});

test("Calculator Object exists", () => {
    expect(funcs.calculator).toBeDefined();
});

test("Add two values", () => {
    expect(funcs.calculator.add(2, 2)).toBe(4);
    expect(funcs.calculator.add("hello", 4)).toBeUndefined();
});

test("Subtract two values", () => {
    expect(funcs.calculator.subtract(8, 4)).toBe(4);
    expect(funcs.calculator.subtract("hello", 4)).toBeUndefined();
});
