// 4. Стрелочные функции. Перепишите все предыдущие задания с использованием стрелочных функций вместо обычных.
// 4.1. Функция расчета двойного факториала:
let doubleFactorial1 = (n: number): number => {
    if (typeof n!== 'number' || n < 0) { // Проверка на отрицательное число или не число
        console.log('Invalid input: n must be a non-negative integer');
        return NaN;
    }
    
    if (n <= 1) {
        return 1;
    } else {
        return n * doubleFactorial1(n - 2);
    }
}
console.log('task4.1');
console.log(doubleFactorial1(-10));
console.log(doubleFactorial1(10));


// 4.2. Функция с rest параметрами:
let getNumbers1 = (...args: (string | number)[]) => {
    return args.filter(arg => typeof arg === 'number') as number[];
}
console.log('task4.2');
console.log(getNumbers1('5', 10, 'Hello', 3, 'World', 45));

// 4.3. Перегрузка функций:
const calculate1 = (a: number, b: number, operator: string): number => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        console.log('Division by zero is not allowed');
        return NaN;
      }
      return a / b;
    default:
      throw new Error('Invalid operator');
  }
};

const calculateArray = (data: (number | string)[]): number => {
  let result = data[0] as number;
  for (let i = 1; i < data.length; i += 2) {
    const operator = data[i] as string;
    const num = data[i + 1] as number;
    switch (operator) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        if (num === 0) {
          console.log('Division by zero is not allowed');
          return NaN;
        }
        result /= num;
        break;
      default:
        throw new Error('Invalid operator');
    }
  }
  return result;
};
console.log('task4.3');
console.log(calculate1(5, 10, '+'));
console.log(calculate1(5, 10, '-')); 
console.log(calculate1(5, 10, '*'));
console.log(calculate1(5, 10, '/'));
console.log(calculate1(5, 0, '/'));
console.log(calculateArray([2, '+', 3, '-', 4, '*', 2]));
console.log(calculateArray([10, '/', 2, '+', 3, '-', 1]));
console.log(calculateArray([3, '/', 0]));
