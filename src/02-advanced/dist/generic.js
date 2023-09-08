"use strict";
;
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length >= 3) {
        car.model = model;
    }
    if (year >= 1900 && year <= new Date().getFullYear()) {
        car.year = year;
    }
    return car;
}
const cars = ['Suzuki', 'Nissan'];
const car = {
    model: 'Suzuki',
    year: 2022
};
//# sourceMappingURL=generic.js.map