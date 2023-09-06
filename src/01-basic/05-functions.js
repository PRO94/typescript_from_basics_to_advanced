// ---------- Functions
function add(num1, num2) {
    return num1 + num2;
}
var result = add(2, 3);
function joinArrayAndUpperCase(_a, joinBy) {
    var strings = _a.slice(0);
    return strings.map(function (str) { return str.trim(); }).join(joinBy).toUpperCase();
}
var joined = joinArrayAndUpperCase(['hello  ', '  ts', '  from  ', 'js  '], '!');
console.log(joined);
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log(position());
console.log(position(12));
console.log(position(12, 23));
