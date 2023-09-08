"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Input(target, propName) {
    console.log('Input', target, propName);
}
function Func(target, propName, descriptor) {
    console.log('Func', target, propName, descriptor);
}
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: true,
        get() {
            return original.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    name;
    get componentName() {
        return this.name;
    }
    set componentName(name) {
        this.name = name;
    }
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Input
], CardComponent.prototype, "name", void 0);
__decorate([
    Func
], CardComponent.prototype, "componentName", null);
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    Component({
        selector: '#card',
        template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
    })
], CardComponent);
const card = new CardComponent('My Card Component');
const btn = document.querySelector('#btn');
btn.addEventListener('click', card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    };
}
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    let isValid = true;
    if (!objConfig) {
        return isValid;
    }
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    email;
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
const form = new Form('test@test.com');
if (validate(form)) {
    console.log('Valid', form);
}
else {
    console.log('Validation error');
}
//# sourceMappingURL=decorators.js.map