interface A {
  [key: string]: any;
}

interface B {
  [key: string]: any;
}

function hasKeys<T>(data: Partial<T>, keys: Array<keyof T>): boolean {
  return keys.every(key => key in data);
}

// Example usage:
const partialA: Partial<A> = { key1: 17, key3: 24 };
const keysToCheckA: Array<keyof A> = ["key1", "key2"];

const resultA = hasKeys(partialA, keysToCheckA);
console.log(resultA); // Output: false

const partialB: Partial<B> = { keyA: "valueA", keyB: 42 };
const keysToCheckB: Array<keyof B> = ["keyA", "keyB"];

const resultB = hasKeys(partialB, keysToCheckB);
console.log(resultB); // Output: true