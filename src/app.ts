// 1. Функция расчета двойного факториала
// Создайте функцию, которая принимает целое число и вычисляет его двойной факториал. Двойной факториал числа n равен произведению всех чисел от 1 до n, включительно, через один (т.е., n* (n-2) * (n-4) *...). Функция должна корректно обрабатывать ошибку при получении отрицательного значения или значения, не являющегося числом.

function doubleFactorial(n: number): number {
    if (typeof n!== 'number' || n < 0) { // Проверка на отрицательное число или не число
        console.log('Invalid input: n must be a non-negative integer');
        return NaN;
    }
    
    if (n <= 1) {
        return 1;
    } else {
        return n * doubleFactorial(n - 2);
    }
}
console.log('task1');
console.log(doubleFactorial(-10));
console.log(doubleFactorial(10));


// 2. Функция с rest параметрами
// Создайте функцию, которая принимает сочетание строк и чисел (используйте rest параметры). Ваша функция должна возвращать массив только чисел из предоставленных аргументов.

function getNumbers(...args: (string | number)[]) {
    return args.filter(arg => typeof arg === 'number') as number[];
}
console.log('task2');
console.log(getNumbers('5', 10, 'Hello', 3, 'World', 45));

// 3. Перегрузка функций
// Создайте перегруженную функцию calculate, которая может принимать либо два числа и оператор в виде строки ('+', ', '*' или '/'), либо массив чисел и строк-операторов, и возвращать результат соответствующей математической операции.
function calculate(a: number, b: number, operator: string): number;
function calculate(data: (number | string)[]): number;
function calculate(a: number | (number | string)[], b?: number, operator?: string): number {
  if (Array.isArray(a)) {
    let result = a[0] as number;
    for (let i = 1; i < a.length; i += 2) {
      const operator = a[i] as string;
      const num = a[i + 1] as number;
      switch (operator) {
        case '+':
          result += num;
    
        case '-':
          result -= num;
    
        case '*':
          result *= num;
        
        case '/':
          if (num === 0) {
            console.log('Division by zero is not allowed');
            return NaN;
          } 
          result /= num;
        
        default:
          throw new Error ('Invalid operator');
      }
    }
    return result;
  } else {
    switch (operator) {
      case '+':
        return a + b!;
      case '-':
        return a - b!;
      case '*':
        return a * b!;
      case '/':
        if (b! === 0) {
          console.log('Division by zero is not allowed');
          return NaN;
        } 
        return a / b!;
      default:
        throw  new Error ('Invalid operator');
    }
  }
}
console.log('task3');
console.log(calculate(5, 10, '+'));
console.log(calculate(5, 10, '-')); 
console.log(calculate(5, 10, '*'));
console.log(calculate(5, 10, '/'));
console.log(calculate(5, 0, '/'));
console.log(calculate([2, '+', 3, '-', 4, '*', 2]));
console.log(calculate([10, '/', 2, '+', 3, '-', 1]));
console.log(calculate([3, '/', 0]));

// 4. Стрелочные функции
// Перепишите все предыдущие задания с использованием стрелочных функций вместо обычных.
// См. task4.ts

// 5. Функции высшего порядка
// Задан массив чисел. Создайте функцию высшего порядка applyOperation, которая принимает массив чисел и функцию операции и возвращает новый массив, к элементам которого применяет операцию. Например, функция applyOperation(arr, double) должна вернуть массив, где каждое число умножено на 2. Попробуйте использовать applyOperation со встроенным методом.map ().

function applyOperation1(arr: number[]): (operation: (num: number) => number) => number[] {
  return (operation) => {
    return arr.map(operation);
  };
}

let addTwo = applyOperation1([1, 2, 3, 4, 5]);
console.log('task5');
console.log(addTwo((num) => num * 2));
