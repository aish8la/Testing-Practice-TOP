# 🛠️ Webpack Utility Library

This project combines a ready-to-use **Webpack setup** with a collection of **JavaScript utility functions** for string manipulation, calculations, ciphers, and array analysis — complete with unit tests using Jest.

---

## 📁 Project Features

- **Custom Webpack Configuration**
- **JavaScript Utility Modules**
- **Unit Testing with Jest**
- **Modular and Testable Codebase**

---

## 🔧 Utility Functions

### 1. `capitalize(text)`
Capitalizes the first letter of a string.

### 2. `reverseString(text)`
Returns the reversed version of a given string.

### 3. `calculator` Object
Performs basic arithmetic:
- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

### 4. `cipher.caesarCipher(text, shift)`
Implements Caesar Cipher shifting with support for:
- Case preservation
- Punctuation handling
- Negative and large shift values

### 5. `arrayTransform.analyzeArray(array)`
Returns:
- `average`
- `min`
- `max`
- `length`  
Fails safely if the array is empty or contains non-number types.

---

## 🧪 Testing

This project includes Jest tests for all utilities.

### To run tests:
```bash
npm test