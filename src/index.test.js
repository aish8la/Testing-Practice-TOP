import * as funcs from "./index.js";

test("Capitalize first character of 'hello World'", () => {
    expect(funcs.capitalize('hello World')).toBe('Hello World');
});

test("Handles non string inputs and strings starting with, non alphabets and white spaces", () => {
    expect(funcs.capitalize('   hello World ')).toBe('Hello World');
    expect(funcs.capitalize('{hello: world}')).toBe('{hello: world}');
    expect(funcs.capitalize("")).toBeUndefined();
    expect(funcs.capitalize({hello: "world"})).toBeUndefined();
});