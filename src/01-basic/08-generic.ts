// ---------- Generic

const arrayOfNumbers: Array<number> = [1, 2, 3, 5, 8, 13];
const arrayOfStrings: Array<string> = ['hello', 'from', 'ts', 'from', 'js'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);