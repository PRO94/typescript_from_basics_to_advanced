var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ---------- Classes
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.getInfo = function () {
        return "The person full name is ".concat(this.firstName, " ").concat(this.lastName, ". Age is: ").concat(this.age);
    };
    return User;
}());
// Short version of class usage
var Car = /** @class */ (function () {
    function Car(model, // it will create public readonly properties and assign them from the constructor
    numberOfWheels) {
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }
    return Car;
}());
// Access modificators & Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black'; // by default all the properties are public
        this.live();
    }
    Animal.prototype.saySomething = function () {
        console.log(this.voice, this.voice, this.voice);
    };
    Animal.prototype.live = function () {
        console.log('The animal is living!');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice; // it's possible to get access to protected items from the parent class
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('meow');
cat.saySomething();
console.log('The cat has ' + cat.color + ' color');
// Abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Component rendered");
    };
    AppComponent.prototype.info = function () {
        return "This is the component";
    };
    return AppComponent;
}(Component));
