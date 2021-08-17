//join - из массива в строку
// split - из строки в число
// indexOf - поиск элемента в массива, те индекс первого вхождения
// let mas = [1, 2, 3, 4]
// console.log(typeof mas + ' ' + mas) //object
// console.log(typeof mas.join('') + ' ' + mas.join('')) //string

// let str = '1234'
// console.log(typeof str + ' ' + str) //string
// console.log(typeof str.split(' ') + ' ' + str.split('')) //object

// let s = '1234'
// let mass = s.split('')
// console.log(mass[0])
// console.log(mass.indexOf('4'))

// Тема: объекты в JS
// Объект - сущность, которая имеет свойства и выполняет действия

/* let car = {
  name: 'Audi',
  price: 1000,
  year: 2020,
  engineStarted: false,
  show: function () {
    console.log(this.name + ' стоит' + this.price)
  },
}

let show = function () {
  console.log(this.name + ' стоит' + this.price)
}

let car2 = {
  name: 'Audi',
  price: 1000,
  year: 2020,
  engineStarted: false,
}

car.color = 'white'
console.log(car)

car.start = startEngine
car.start()

car2.start = startEngine
car2.start()

function startEngine() {
  if (!this.engineStarted) {
    this.engineStarted = true
  }
}

console.log(car2)

car.stop = function () {
  if (this.engineStarted) {
    this.engineStarted = false
  }
}
car.stop()
console.log(car.engineStarted)
 */

//Функция конструктор - функция, с помощью которой можно сделать любой объект

/* function Car(marka, price, year) {
  this.marka = marka
  this.year = year
  this.price = price
  this.show = function () {
    console.log(this.marka + ' стоит ' + this.price)
  }
}

let myCar1 = new Car('Audi', 1000, 2020)
let myCar2 = new Car('BMW', 2000, 2021)
let myCar3 = new Car('VW', 1100, 2020) */

// console.log(myCar1)
// myCar1.show()
// myCar2.show()
// myCar3.show()

// let cars = [myCar1, myCar2, myCar3, test]
// console.log(cars[2].price)

// for (item of cars) {
//   item.show()
// }

//Удаление элемента из массива
// delete myCar2.year
// console.log(myCar2.year)

//Добавление элемента в массив
// cars.push(new Car('Vaz', 500, 2012))
// for (item of cars) {
//   item.show()
// }

//Переопределение объекта myCars3 на test
// let test = myCar3
// myCar3 = null
// console.log(cars)

// *********************************ДЗ*********************************
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let number = prompt('Введите число от 0 до 999')
let num = []
let obj = {
  // hundreds: '', //сотни
  // dozens: '', //десятки
  // units: '', //единицы
}

function transformation(number) {
  if (number < 0 || number > 999) {
    console.log('Число ' + number + ' вне диапазона 0 - 999')
  } else {
    switch (number.length) {
      case 3:
        obj.hundreds = number[0]
        obj.dozens = number[1]
        obj.units = number[2]
        break
      case 2:
        obj.dozens = number[0]
        obj.units = number[1]
        break
      default:
        obj.units = number
    }
    console.log(obj)
  }
}
transformation(number)

// 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
