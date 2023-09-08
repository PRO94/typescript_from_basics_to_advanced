// const devices: string[] = ['laptop', 'lamp', 'phone'];
// const devices2: Array<string> = ['laptop', 'lamp', 'phone'];    // equivalent usage

// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('promise result');
//     }, 2000);
// })
// promise.then(data => {
//     console.log(data.toUpperCase());    // data is a string
// })

// generic function to work with any objects
// function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
//     return Object.assign({}, a, b); 
// }
// const merged = mergeObjects({name: 'Roman'}, {age: 28});
// console.log(merged); // intellisense allows us to get access to the properties merged.name merged.age
// const merged2 = mergeObjects({model: 'Tesla'}, {version: 3});
// console.log(merged2.model, merged2.version);
// const merged3 = mergeObjects({a: 1}, "bbb"); // error because we set T and R as objects


/// ==========


// interface ILength {
//     length: number
// }

// function withCount<T extends ILength>(value: T) : { value: T, count: string} {
//     return {
//         value,
//         count: `Here is ${value.length} characters`
//     };
// }
// console.log(withCount('Hi typescript'));        // {value: 'Hi typescript', count: 'Here is 13 characters'}
// console.log(withCount(['I', 'am', 'array']));   // {value: Array(3), count: 'Here is 3 characters'}
// console.log(withCount(20));                     // error because number doesn't have a key .length
// console.log(withCount({length: 20}));           // {value: {…}, count: 'Here is 20 characters'}


/// ==========


// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key];
// }
// const person = {
//     name: 'Roman',
//     age: 28
// };
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));     // error because 'job' doesn't exist in person


/// ==========


// class Collection<T extends number | string | boolean> {
//     constructor(private _items: T[]) { }

//     add(item: T) {
//         this._items.push(item);
//     }

//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item);
//     }

//     get items(): T[] {
//         return this._items;
//     }
// }

// const strings = new Collection<string>(['I', 'am', 'strings']);
// strings.add('one more');
// strings.remove('am');
// console.log(strings.items);

// const numbers = new Collection<number>([1, 2, 3, 5, 8]);
// numbers.add(7);
// numbers.remove(13);
// console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b: 2}]);
// objs.remove({b: 2});    // it won't be removed because of different references to the objects
// console.log(objs.items);


/// ========== Partial<>


interface ICar {
    model: string,
    year: number
};

function createAndValidateCar(model: string, year: number): ICar {
    const car: Partial<ICar> = {};  // to have possibility to create an empty obj - need to use Partial<>

    if(model.length >= 3) {
        car.model = model;
    }

    if(year >= 1900 && year <= new Date().getFullYear()) {
        car.year = year;
    }

    return car as ICar;
}


/// ========== Readonly<>


const cars: Readonly<Array<string>> = ['Suzuki', 'Nissan'];
// cars.shift();    // error when Readonly<>
// cars[1];

const car: Readonly<ICar> = {
    model: 'Suzuki',
    year: 2022
}

// car.model = 'Subaru';   // error. Can't update any fields in the object because of Readonly<obj>