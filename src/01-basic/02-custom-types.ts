// Custom type - single value
type Login = string;
const login: Login = "admin";
// const login2: Login = 2;    // error

// Custom type - multiple values
type Id = string | number;
const id1: Id = 123;
const id12: Id = 'someId';

type CustomNullableType = string | null | undefined;
const someValue1: CustomNullableType = "test";
const someValue2: CustomNullableType = null;
const someValue3: CustomNullableType = undefined;