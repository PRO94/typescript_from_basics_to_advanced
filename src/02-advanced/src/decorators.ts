// Decorator is a function which usually works with classes as metadata
// constructor is the class which is used for the decoration

interface IComponentDecorator {
    selector: string
    template: string
}

function Component(config: IComponentDecorator) {
    return function<T extends { new (...args: any[]): object }>(
        Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(args);

                const el = document.querySelector(config.selector)!;
                el.innerHTML = config.template;
            }
        }
    }
}

function Input(target: any, propName: string | Symbol) {
    console.log('Input', target, propName);
}

function Func(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Func', target, propName, descriptor);
}

function Bind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: true,
        get() {
            return original.bind(this);
        }
    };
}

@Component({
    selector: '#card',
    template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
})
class CardComponent {
    @Input
    private name:string;

    @Func
    get componentName() {
        return this.name;
    }

    set componentName(name: string) {
        this.name = name;
    }

    constructor(name:string) {
        this.name = name;
    }

    @Bind
    logName(): void {
        console.log(`Component name: ${this.name}`);
    }
}

const card = new CardComponent('My Card Component');

const btn = document.querySelector('#btn')!;
// btn.addEventListener('click', card.logName.bind(card)); // Need to add .bind(card) to have access to the context of card. Or use the @Bind decorator
btn.addEventListener('click', card.logName);


// ---------- Validator decorator example

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
    [prop:string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: ValidatorConfig = { }

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    };
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name];
    let isValid = true;
    if(!objConfig) {
        return isValid;
    }
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    })

    return isValid;
}

class Form {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}

// const form = new Form();    // Validation error
const form = new Form('test@test.com');
if (validate(form)) {
    console.log('Valid', form);
} else {
    console.log('Validation error');
}