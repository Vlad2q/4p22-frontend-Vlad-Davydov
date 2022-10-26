'use strict'

/** ////////СТРОКИ//////
const str = 'строка'.toUpperCase(); Содержимое в заглавное
const str2 = 'СТРока'.toLowerCase(); Содержимое в строчное

console.log('Строка'.includes('Стр')); Включает в себя 

console.log('Строка'.startsWith('Стр')); Начинается с (***)
console.log('Строка'.endsWith('Стр')); Заканчивается на (***)\

console.log('А роза упала на лапу Разора'.replace('А','а'));
console.log('А роза упала на лапу Арзора'.replaceAll('А','а'));

const str = '             строка с пробелом по краям        ';
console.log(str.trim()); Убирает пробелы

const str = 'Привет';
console.log(str [0]); Вывести определённый символ
console.log(str.length); Вывести длину строки

const str = '   Строка  '.trim().toLowerCase().startsWith('стр');
console.log(str); Обьединение методов


////////////////////////СТРОКИ////////////////////////*/
/** /////////Логические операторы/////////
  Не  - !
  ИЛИ - ||
  И   - &&

const a = null;
const b = 'Строка';
const с = 0;

const resultor = a || b || c;
const resultAnd = a && b && c;
console.log(resultAnd);

const num1 = 5;
const num2 = '5';

const result = num1 === num2;
console.log(result);

const result2 = num1 !== num2;
console.log(result2)

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

const num = 5;
const num2 = 10;

 
if (num >=5 && num2 >= 10){
  console.log('число больше 5 а нам2 больше или равен 10');  
}else{
    console.log('Иначе');
}

const num1 = 3;
const num3 = 10;

 
if (num1 >=5 && num3 >= 10){
  console.log('число больше 5 а нам2 больше или равен 10');  
}else{
    console.log('Иначе');
}
////////////////////////Логические операторы/////////////////////////*/
/** ///////////IF//////////////
const str = 'ЗНАЧЕНИЕ'

switch (str){
    case 'ЗНАЧЕНИЕ 1': console.log(1); break;
    case 'ЗНАЧЕНИЕ 2': console.log(2); break;
    case 'ЗНАЧЕНИЕ 3': console.log(3); break;
    default: console.log('default');
}

switch (str){
    case 'ЗНАЧЕНИЕ 1':{
     console.log(1); 
} break;
    case 'ЗНАЧЕНИЕ 2':{
     console.log(2); 
} break;
    case 'ЗНАЧЕНИЕ 3':{
     console.log(3); 
} break;
  
    default: console.log('default');
}
*/

const calculator__button = document.getElementById('calculator__button');
const out = document.getElementById('out');

calculator__button.addEventListener('click' , (event) => {
    let num1 = document.getElementById('num1').value;
    const operacion = document.getElementById('operacion').value;
    let num2 = document.getElementById('num2').value;
    let resultCalculator;

    event.preventDefault();

    if (num1 === ''){
      return console.log('Первое число не указано');
    }

    if (num2 === ''){
      return console.log('Второе число не указано');
    }

    if (operacion === ''){
      return console.log('Не введён знак');
    }

    if (isNaN(num1) === true || isNaN(num2) === true) {
      out.innerText = 'Некорректынй ввод чисел';
      return console.log('Некорректный ввод чисел')
    };

    switch (operacion) {
      case '': return console.log('Не введён знак'); break; 
      case '+': resultCalculator = Number(num1) + Number(num2); break; 
      case '-': resultCalculator = Number(num1) - Number(num2); break; 
      case '*': resultCalculator = Number(num1) * Number(num2); break; 
      case '/': resultCalculator = Number(num1) / Number(num2); break; 
      default: return out.innerText = 'Программа не поддерживает такую операцию',
      console.log('Программа не поддерживает такую операцию')
    };

    if (isNaN(resultCalculator)) {
      out.innerText = 'Операция некорректна';
      return console.log('Операция некорректна');
    }

    if (resultCalculator === Infinity) {
      out.innerText = 'Операция некорректна';
      console.log('Операция некорректна');
    } else {
      out.innerText = `Ответ: ${resultCalculator}`;
      console.log(resultCalculator);
    };
});