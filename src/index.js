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