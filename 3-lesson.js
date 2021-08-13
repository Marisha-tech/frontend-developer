/* let table = "<table border='1' width='700'>"

let str = 1 //счетчик строк

while(str <= 100) {

  table += "<tr>"
  let td = 1 //счетчик столбцов
  while(td <= 10) {
    table += "<td>" + (str * td) + "</td>"
    td++
  }
  table += "</tr>"
  str++
}

table += "</table">

document.write(table) */
// **************************break - завершает цикл************************************
/* //Вывести 5 строк, вместо 100
let table = "<table border='1' width='700'>"

let str = 1 //счетчик строк

while(str <= 100) {

  if(str == 6) {
    break
  }
  
  table += "<tr>"
  let td = 1 //счетчик столбцов
  while(td <= 10) {
    table += "<td>" + (str * td) + "</td>"
    td++
  }
  table += "</tr>"
  str++
}
table += "</table">

document.write(table) */

// ************************continue - пропускает текущий шаг цикла**************************************

/* //Пропускаем пятый столбец
let table = "<table border='1' width='700'>"

let str = 1 //счетчик строк

while(str <= 100) {

  if(str == 6) {
    break
  }
  
  table += "<tr>"
  let td = 1 //счетчик столбцов
  while(td <= 10) {

    if(td == 5) {
      td++
      continue // не выполняет действие, которое находится ниже, т.е. сразу переходит к условию while(td <= 10)
    }

    table += "<td>" + (str * td) + "</td>"
    td++
  }
  table += "</tr>"
  str++
}
table += "</table">

document.write(table) */
// **************************************************************
/* //Оформление таблицы цветом
let table = "<table border='1' width='700'>"

let str = 1 //счетчик строк
let style

while(str <= 100) {
  
  table += "<tr>"
  let td = 1 //счетчик столбцов
  while(td <= 10) {

    if(td % 2 == 0) {
      style = "color: red"
    }
    else {
      style = "color: green"
    }

    table += "<td style='" + style + "'>" + (str * td) + "</td>"
    td++
  }
  table += "</tr>"
  str++
}
table += "</table">

document.write(table) */
// ***************************Бесконечный цикл***********************************
/* while (1) {
  let age = +prompt("Ваш возраст")

  if (!isNaN(age)) {
    console.log("Введено число")
    break
  }
  else {
    console.log("Введена строка, введите снова свой ответ")
  }
}
 */
// **************************************************************

// let i = 0
// do {
//   console.log(i)
//   i++
// } while(1 < 3)

// *********************Цикл for*****************************************
//Пример расчета дохода на депозите
//summa - сумма вклада, year - срок вклада, stavka - ставка вклада, profit - прибыль
/* function deposit(summa, year) {
  let stavka = year > 3 ? 6 : 5 //если срок вклада ,больше 3х лет, тогда ставка 6%, иначе 5%
  let profit
  let income = summa

  for (let i = 1; i <= year; i++) {
    profit = (summa * stavka) / 100
    summa += profit
    document.write(
      'За ' +
        i +
        ' год Ваша прибыль составит ' +
        profit.toFixed(2) +
        ' Ваша сумма составляет ' +
        summa.toFixed(2) +
        '<hr>'
    )
  }

  let sumIncome = summa - income
  document.write(
    'Общий доход за ' + year + ' лет составляет ' + sumIncome.toFixed(2)
  )
}

deposit(100000, 5) */

//Пример вывода вклада для каждого рандомного клиента
/* let money, man, year

for (man = 1; man <= 10; man++) {
  money = parseInt(Math.random() * 900000 + 100000) //рандомная сумма вклада от 100 000 до 1 000 000
  year = parseInt(Math.random() * 4 + 1) //рандомный срок вклада от 1 года до 5 лет

  document.write('<h1>Клиент №' + man + ' (сумма = ' + money + ')' + '</h1>')
  deposit(money, year)
} */

//Игра угадай число
/* let money = +prompt('Ваша сумма')
let stavka = +prompt('Ваша ставка')

if (stavka > money) {
  console.log('Ставка не может превышать сумму средств')
} else {
  let r = (Math.random() * 9 + 1).toFixed(0) //загаданное число от 1 до 10
  for (let i = 1; i <= 3; i++) {
    //i - количество попыток
    let n = prompt('Попытка №' + i)

    if (n == r) {
      money += stavka
      alert('Поздравляем! Ваша сумма = ' + money)
      break
    } else {
      if (i == 3) {
        money -= stavka
        alert('Вы проиграли! Ваша сумма = ' + money + ' Было загадано ' + r)
        break
      }
    }
  }
} */

// ****************************Массивы**********************************
// let mas = [1, 2, 3, 'str', true, 777]
// let size = mas.length //длина массива
// console.log(mas[size - 1]) //последний элемент

//Поиск элемента в массиве
// console.log(mas.indexOf(777)) //indexOf вернет -1, если элемент не найден в массиве, либо элемент первого вхождения

//Добавление элемента в массив
// let arr = []
// arr.push(10, 20)
// console.log(arr)

//Заполнить массив числами 10 20 30 40 ... 100
/* for (let i = 0; i < 10; i++) {
  arr[i] = (i + 1) * 10
}
console.log(arr) //выведет в строку [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] */

/* for (let item of arr) {
  //каждое значение из массива
  console.log(item) //выведет в столбец http://joxi.ru/12M50eytw8dKO2
} */

/* for (let i in arr) {
  //выведет каждый индекс массива
  console.log(arr[i])
} */

//Удаление элемента из массива
/* let deleted = mas.pop()
mas.pop() //удалит последний элемент из массива
console.log(mas)
console.log(deleted) */

//Массив объектов
/* let goods = [
  {
    title: 'Товар 1',
    price: 100,
  },
  {
    title: 'Товар 2',
    price: 200,
  },
  {
    title: 'Товар 3',
    price: 300,
  },
]

// for (good of goods) {
//   console.log(good.title + ' стоит ' + good.price)
// }

//Сумма всех товаров
function getSum(mas) {
  let sum = 0

  for (item of mas) {
    sum += item.price
  }
  return sum
}
getSum(goods)
console.log(getSum(goods)) */
// ***************************ДЗ***********************************
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
//простые чила - которые делятся на себя и на 1 (2, 3, 5, 7, 11, 13, 19)
let number = 20
let i = 0
let j = 0

while (i < number) {
  while (j < i) {
    if (number % j != 0) {
      j++
    }
  }

  i++
  console.log(i)
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
/* let cart = [
  {
    title: 'Товар 1',
    price: 100,
    quantity: 1,
  },
  {
    title: 'Товар 2',
    price: 200,
    quantity: 2,
  },
  {
    title: 'Товар 3',
    price: 300,
    quantity: 3,
  },
  {
    title: 'Товар 4',
    price: 400,
    quantity: 4,
  },
  {
    title: 'Товар 5',
    price: 500,
    quantity: 5,
  },
]

function countBasketPrice(mas) {
  let sum = 0
  let quantity = 0

  for (item of mas) {
    sum += item.price
    quantity += item.quantity
  }
  return [sum, quantity]
}

countBasketPrice(cart)
console.log(countBasketPrice(cart)) */

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
/* let i, one, two
function numbers(one, two) {
  for (i = 0; i <= 9; i++) {}
  return i
}
numbers(0, 9)
console.log(numbers(0, 9)) */
// **************************************************************
// **************************************************************
