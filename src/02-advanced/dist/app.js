"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    updateName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}
const roman = new Person('Roman');
const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    console.log(event);
});
//# sourceMappingURL=app.js.map