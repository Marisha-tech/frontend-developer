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
// **************************************************************
// **************************************************************
// **************************************************************
// **************************************************************
// **************************************************************
