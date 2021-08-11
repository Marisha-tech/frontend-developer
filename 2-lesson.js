/* 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты? */

/* // ++i возвращает значение i после того, как оно было увеличено - прединкрементный оператор 
// i++ возвращает значение i до приращения - постинкрементный оператор 

var a = 1,
  b = 1,
  c,
  d


// c, d = undefined, тк им не присвоены значения
c = ++a
// console.log(c = ++a)            
// ++ префиксная форма инкремента, сначала увеличиваем, потом присваиваем
// (префиксная форма) a = 2

d = b++
// console.log(d = b++)           
// ++ постфиксная форма инкремента, сначала присваиваем, потом увеличиваем
// (постфиксная форма) b = 2 для следующих операций

c = 2+ ++a
// console.log(c = 2+ ++a)         //5 - ?
// (префиксная форма) a = 3

d = 2+ b++
// console.log(d = 2+ b++)         // 4 - ?
// (постфиксная форма) b = 2 для текущей операции, но для следующих операций b = 3

console.log(a)                  // 3
console.log(b)                  // 3 */

// *******************************************************************
/* // 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

console.log(a)  // 4
console.log(x)  // 5 */

// ***********************************************************************
/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

/* let a = +prompt('Введите значение а')
let b = +prompt('Введите значение b')

function twoVar (a, b) {
  if( a >= 0 && b >= 0) {
    console.log(a - b)
    return a - b
  } 
  else if (a < 0 && b < 0) {
    console.log(a + b)
    return a + b
  }
  else {
    console.log(a + b )
    return a + b
  }
}

console.log(twoVar (a , b))  */

// ***********************************************************************
/* // 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// Первый вариант
// let a = +prompt('Введите число от 0 до 15')

// switch(a) {
//   case 0:
//     console.log('0')
//   case 1:
//     console.log('1')
//    case 2:
//     console.log('2')
//   case 3:
//     console.log('3')
//   case 4:
//     console.log('4')
//   case 5:
//     console.log('0')
//   case 6:
//     console.log('6')
//   case 7:
//     console.log('7')
//   case 8:
//     console.log('8')
//   case 9:
//     console.log('9')
//   case 10:
//     console.log('10')
//   case 11:
//     console.log('11')
//   case 12:
//     console.log('12')
//   case 13:
//     console.log('13')
//   case 14:
//     console.log('14')
//   case 15:
//     console.log('15')
//     break;
//   default:
//     console.log('Не верно выполнен ввод числа')
// }


// Второй вариант через рукурсию
let a = (Math.random() * 15).toFixed(0)

function alter(a) {
  if(a ==15) {
    console.log(a)
    return
  }

  console.log(a++ + ' ')
}
alter(a) */

// ***********************************************************************
/* // 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

let a = +prompt('Введите значение а')
let b = +prompt('Введите значение b')

function sum (a, b) {
  return a + b
}

function raz (a, b) {
  return a - b
}

function umno (a, b) {
  return a * b
}

function del(a, b) {
  if (b != 0) {
    return a / b
  }
  return 0
  
}

console.log(sum(a, b))
console.log(raz(a, b))
console.log(umno(a, b))
console.log(del(a, b)) */

// ***********************************************************************
/* // 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
a = +prompt('Введите значение a')
b = +prompt('Введите значение b')
operation = prompt('Введите знак операции')

function sum(a, b) {
  return a + b
}

function raz(a, b) {
  return a - b
}

function umno(a, b) {
  return a * b
}

function del(a, b) {
  if (b != 0) {
    return a / b
  }
  return 0
}

function mathOperation(a, b, operation) {
  switch (operation) {
    case '+':
      // sum(a, b)
      console.log(sum(a, b))
      break
    case '-':
      console.log(raz(a, b))
      break
    case '*':
      console.log(umno(a, b))
      break
    case '/':
      console.log(del(a, b))
      break
    default:
      console.log('Введен не верный знак')
  }
}

mathOperation(a, b, operation) */

// ***********************************************************************
/* // 7) *Сравнить null и 0. Попробуйте объяснить результат.

let a = null
let b = 0

console.log(a == b) //false
console.log(a === b) //false
console.log(a !== b) //true
console.log(null > 0) //false
console.log(null < 0) //false
console.log(null <= 0) //true
console.log(null >= 0) //true
console.log(null !== 0) //true */

// ***********************************************************************

/* // 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
let val = +prompt('Введите число, которое нужно возвести в степень')
let pow = +prompt('Введите степень')

function power(val, pow) {
  if (pow == 0) {
    return 1
  }
  // return Math.pow(val, pow)
  // console.log(val * power(val, pow - 1))

  return val * power(val, pow - 1)
}
power(val, pow)
console.log(power(val, pow)) */
