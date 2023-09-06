// ---------- Functions

function add(num1: number, num2: number): number {
    return num1 + num2;
}
let result = add(2, 3);

function joinArrayAndUpperCase([...strings]: string[], joinBy: string): string {
    return strings.map(str => str.trim()).join(joinBy).toUpperCase();
}

const joined = joinArrayAndUpperCase(['hello  ', '  ts', '  from  ', 'js  '], '!');
console.log(joined);


interface IMyPosition {
    x: number | undefined
    y: number | undefined
}

interface IMyPositionWithDefault extends IMyPosition {
    default: string
}

// Functions overloading
function position(): IMyPosition;
function position(a: number): IMyPositionWithDefault;
function position(a: number, b:number): IMyPosition;

function position(a?: number, b?:number) {
    if (!a && !b) {
        return {x: undefined, y: undefined};
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()};
    }

    return {x: a, y: b};
}
console.log(position())
console.log(position(12))
console.log(position(12, 23))