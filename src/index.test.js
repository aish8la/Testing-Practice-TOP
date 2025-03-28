import * as funcs from "./index.js";

test("Capitalize first character string", () => {
  expect(funcs.capitalize("hello World")).toBe("Hello World");
  expect(funcs.capitalize("   hello World ")).toBe("Hello World");
  expect(funcs.capitalize("{hello: world}")).toBe("{hello: world}");
  expect(funcs.capitalize("")).toBeUndefined();
  expect(funcs.capitalize({ hello: "world" })).toBeUndefined();
});

test("Reverses string", () => {
  expect(funcs.reverseString("Hello World")).toBe("dlroW olleH");
  expect(funcs.reverseString("   Hello World ")).toBe(" dlroW olleH   ");
  expect(funcs.reverseString("{hello: world}")).toBe("}dlrow :olleh{");
  expect(funcs.reverseString("")).toBeUndefined();
  expect(funcs.reverseString({ hello: "world" })).toBeUndefined();
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

test("Divide two values", () => {
  expect(funcs.calculator.divide(12, 3)).toBe(4);
  expect(funcs.calculator.divide(0, -3)).toBe(0);
  expect(funcs.calculator.divide(12, 0)).toBeUndefined();
  expect(funcs.calculator.divide("hello", 4)).toBeUndefined();
});

test("Multiply two values", () => {
  expect(funcs.calculator.multiply(2, 2)).toBe(4);
  expect(funcs.calculator.multiply(0, 3)).toBe(0);
  expect(funcs.calculator.multiply(-3, 0)).toBe(0);
  expect(funcs.calculator.multiply("hello", 4)).toBeUndefined();
});

test("caesarCipher correctly ciphers", () => {
  expect(funcs.cipher.caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher correctly outputs with same case", () => {
  expect(funcs.cipher.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher correctly leaves punctuation unmodified", () => {
  expect(funcs.cipher.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesarCipher correctly handles negative shift factors", () => {
  expect(funcs.cipher.caesarCipher("AB", -8)).toBe("ST");
});

test("caesarCipher correctly handles large shift factors", () => {
  expect(funcs.cipher.caesarCipher("AB", 50)).toBe("YZ");
});

test("analyzeArray correctly returns object", () => {
  expect(funcs.arrayTransform.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray returns null if array contains non number data types", () => {
  expect(
    funcs.arrayTransform.analyzeArray([1, 8, "Hello", 4, 2, 6]),
  ).toBeUndefined();
});
