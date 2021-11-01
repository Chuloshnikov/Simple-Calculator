// Simple calculator

// Сбор данных по оператору
const operator = prompt('Введите оператор (  +, -, *,**, % или / ): ');

// Сбор данных по операнду
const number1 = parseFloat(prompt('Введите первое число: '));
const number2 = parseFloat(prompt('Введите второе число: '));

let result;

// if else условия
if (operator == '+') {
   result = number1 + number2,
      alert(result);
}
else if (operator == '-') {
   result = number1 - number2,
      alert(result);
}
else if (operator == '*') {
   result = number1 * number2,
      alert(result);
}
else if (operator == '/') {
   result = number1 / number2,
      alert(result);
}
else if (operator == '**') {
   result = number1 ** number2,
      alert(result);
}
else if (operator == '%') {
   result = number1 % number2,
      alert(result);
}
else {
   alert('введен неправильный операнд или оператор')
}


// 
console.log(`${number1} ${operator} ${number2} = ${result}`);