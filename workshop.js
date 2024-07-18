"use strict";
// Объявление функции:
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet('Maria'));
// Опциональные и предустановленные параметры:
function greet2(name, isMorning, message = 'Good day') {
    if (isMorning) {
        return `Good Morning, ${name}`;
    }
    return `${message}, ${name}`;
}
console.log(greet2('Maria', true));
console.log(greet2('Maria'));
// Rest-параметры:
function greet3(message, ...names) {
    return `${message} ${names.join(', ')}`;
}
console.log(greet3('Hello', 'Maria', 'Nina', 'Alisa'));
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(', ', b);
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
}
console.log(add('Hello', 'World'));
console.log(add(10, 5));
// Анонимные и стрелочные функции:
let add2 = function (a, b) {
    console.log(a + b);
};
add2(10, 20);
let multiply = (a, b) => a * b;
console.log(multiply(2, 2));
// Высшие порядки и замыкания:
function createAdder(a) {
    return function (b) {
        return a + b;
    };
}
let addFive = createAdder(5);
console.log(addFive(10));
let addTen = createAdder(10);
console.log(addTen(20));
