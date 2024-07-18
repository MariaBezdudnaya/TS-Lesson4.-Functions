// Объявление функции:
function greet(name: string): string {
    return `Hello, ${name}`
}
console.log(greet('Maria'));

// Опциональные и предустановленные параметры:
function greet2(name: string, isMorning?: boolean, message: string = 'Good day'): string {
    if (isMorning) {
        return `Good Morning, ${name}`;
    }
    return `${message}, ${name}`;
}
console.log(greet2('Maria', true));
console.log(greet2('Maria'));

// Rest-параметры:
function greet3(message: string, ...names: string[]): string {
   return `${message} ${names.join(', ')}`;
}
console.log(greet3('Hello', 'Maria', 'Nina', 'Alisa'));

// Перегрузка функции:
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') return a.concat(', ', b);
    if (typeof a === 'number' && typeof b === 'number') return a + b;
}
console.log(add('Hello', 'World'));
console.log(add(10, 5));

// Анонимные и стрелочные функции:
let add2 = function(a: number, b: number): void {
    console.log(a + b);
}
add2(10, 20);

let multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 2));

// Высшие порядки и замыкания:
function createAdder(a: number): (b: number) => number {
    return function(b: number): number {
        return a + b;
    }
}
let addFive = createAdder(5);
console.log (addFive(10));

let addTen = createAdder(10);
console.log(addTen(20));