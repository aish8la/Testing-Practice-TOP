export function capitalize(text) {
    if(typeof text !== "string") return
    text = text.trim();
    if(!text) return
    return text.at(0).toUpperCase() + text.slice(1);
}

export function reverseString(text) {
    if(typeof text !== "string" || !text) return
    return [...text].reverse().join("");
}

export const calculator = {
    add: (num1, num2) => {
        if(typeof num1 !== "number" || typeof num2 !== "number") return
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        if(typeof num1 !== "number" || typeof num2 !== "number") return
        return num1 - num2;
    },

    divide: (num1, num2) => {
        if(num1 === 0) return 0;
        if(typeof num1 !== "number" || typeof num2 !== "number" || num2 === 0) return
        return num1 / num2;
    },

    multiply: (num1, num2) => {
        if(typeof num1 !== "number" || typeof num2 !== "number") return
        if(num1 === 0 || num2 === 0) return 0;
        return num1 * num2;
    }
}

export const cipher = {

    trueModulo(n, m) {
        return ((n % m) + m) % m;
    },

    isUpper(char) {
        return char === char.toUpperCase();
    },

    caesarCipher(text, shiftFact) {
        let ciphered = '';

        for(let i = 0; i < text.length; i++) {
            const curChar = text.at(i);

            if(!(/[a-zA-Z]/.test(curChar))) {
                ciphered += curChar;
                continue;
            }
            
            const baseCode = this.isUpper(curChar) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0); //base character code based on the case
            const charIndex = (curChar.charCodeAt(0) - baseCode); //index / how far current character is from base code
            const shiftedIndex = this.trueModulo(charIndex + shiftFact, 26); // shift the char index based on the shift factor and apply true modulo to normalize negatives
            ciphered += String.fromCharCode(shiftedIndex + baseCode); // add shifted index to base code to get the ciphered character
        }
        return ciphered;
    },
}
