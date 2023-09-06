var isFetching = true;
var int = 33;
var float = 2.3;
var num = 3e10;
// int = "2";  // error. Can't assign string to number
var message = "hello ts";
var numberArray = [1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 2, 3, 5, 8, 13]; // generic type Array. The same as number[]
var words = ['Hello', 'ts'];
// Tuple
var contact = ['Roman', 12345];
// Any - allow to put any value in the variable
var variable = 33;
variable = 'some changed value';
function saySomething(something) {
    console.log(something);
}
saySomething('bla-bla-bla');
console.log(message);
