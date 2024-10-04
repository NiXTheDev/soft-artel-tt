export function findSubstringBounds(input: string, position: number): [number, number] {
    if (position < 0 || position >= input.length) {
        throw new Error("Position is out of bounds");
    }

    // Find the index of the previous newline character or start of the string
    const start = input.lastIndexOf('\n', position - 1) + 1;

    // Find the index of the next newline character or end of the string
    const end = input.indexOf('\n', position);
    const endIndex = end === -1 ? input.length : end;

    return [start, endIndex];
}

// Example usage:
const text = "Hello\nWorld!\nThis is a test\nstring\nWith\nMultiple lines!";
const position = 8;
const [start, end] = findSubstringBounds(text, position);
console.log(`Substring bounds: [${start}, ${end}], substring: "${text.substring(start, end)}"`);
// Output: Substring bounds: [6, 11], substring: "World!"