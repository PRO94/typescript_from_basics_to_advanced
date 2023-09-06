const isFetching: boolean = true;

let int: number = 33;
const float: number = 2.3;
const num: number = 3e10;

// int = "2";  // error. Can't assign string to number

const message: string = "hello ts";

const numberArray: number[] = [1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13];    // generic type Array. The same as number[]
const words: string[] = ['Hello', 'ts'];

// Tuple
const contact: [string, number] = ['Roman', 12345];

// Any - allow to put any value in the variable
let variable: any = 33;
variable = 'some changed value';

function saySomething(something: string): void{
    console.log(something);
}

saySomething('bla-bla-bla');

console.log(message);