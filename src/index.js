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