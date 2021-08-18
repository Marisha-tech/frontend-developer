function createTable() {
  let table = document.createElement('table')

  let flag = true // белая-черная клетка

  let tr, td
  let alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' ']
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let startTr = document.getElementById('tr0') // первая строка
  let endTr = document.getElementById('tr9') //последняя строка

  //генерируем ячейки
  for (let i = 0; i < 10; i++) {
    //создаем элемент tr
    tr = document.createElement('tr') //<tr></tr>

    tr.id = 'tr' + i //в каждую строку добавляем id строки
    tr.className = 'table__tr' //в каждую строку добавляем класс

    // tr.innerText = alphabet[i] //в каждой строке выводим букву

    table.appendChild(tr) //в таблицу добавлем по одной строке
    console.log(tr[1])

    for (let j = 0; j < 10; j++) {
      td = document.createElement('td') //<td></td>

      td.innerText = number[j]
      td.className = 'table__td'
      tr.appendChild(td) //в строку добавлем по одной ячейки
    }
  }
  document.querySelector('.desc').appendChild(table) //поместили таблицу в элемент с классом desc
}

createTable()
