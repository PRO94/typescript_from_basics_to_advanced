// ---------- Classes
class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo() {
        return `The person full name is ${this.firstName} ${this.lastName}. Age is: ${this.age}`;
    }
}

// Short version of class usage
class Car {
    constructor(
        readonly model: string,         // it will create public readonly properties and assign them from the constructor
        readonly numberOfWheels) {
    }
}


// Access modificators & Inheritance
class Animal {
    protected voice: string = '';
    public color: string = 'black';     // by default all the properties are public

    constructor() {
        this.live();
    }

    public saySomething() {
        console.log(this.voice, this.voice, this.voice);
    }

    private live() {                      // it's allowed to use the method only in this class Animal
        console.log('The animal is living!');
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void {
        this.voice = voice;             // it's possible to get access to protected items from the parent class
    }
}

const cat = new Cat();
cat.setVoice('meow');
cat.saySomething();
console.log('The cat has ' + cat.color + ' color');


// Abstract classes
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log("Component rendered");
    }
    info(): string {
        return "This is the component";
    }
}