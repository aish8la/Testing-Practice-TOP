import * as funcs from "./index.js";

test("Capitalize first character string", () => {
    expect(funcs.capitalize('hello World')).toBe('Hello World');
});

test("Capitlize: Handles non string inputs and strings starting with, non alphabets and white spaces", () => {
    expect(funcs.capitalize('   hello World ')).toBe('Hello World');
    expect(funcs.capitalize('{hello: world}')).toBe('{hello: world}');
    expect(funcs.capitalize("")).toBeUndefined();
    expect(funcs.capitalize({hello: "world"})).toBeUndefined();
});

test("Reverses string", () => {
    expect(funcs.reverseString("Hello World")).toBe("dlroW olleH");
})

test("Handles non string inputs and strings starting with, non alphabets and white spaces", () => {
    expect(funcs.reverseString('   Hello World ')).toBe(' dlroW olleH   ');
    expect(funcs.reverseString('{hello: world}')).toBe('}dlrow :olleh{');
    expect(funcs.reverseString("")).toBeUndefined();
    expect(funcs.reverseString({hello: "world"})).toBeUndefined();
});