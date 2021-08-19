let board = document.querySelector('.board')

let row //строка
let cell //столбец

let number = [8, 7, 6, 5, 4, 3, 2, 1]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// let i = 0
let rowOne = document.createElement('div') //первая строка
let rowEnd = document.createElement('div') //последняя строка

let columnOne = document.createElement('div') //первая колонка
let columnEnd = document.createElement('div') //последняя колонка

let flagLine = true //флаг строки
let flagColumn = true //флаг колонки

//добавление обеих строк
function cellAlphabet(mas) {
  rowOne.className = 'row__letter'
  rowEnd.className = 'row__letter'

  for (let i = 0; i < alphabet.length; i++) {
    let cellAlphabet = document.createElement('div')

    cellAlphabet.className = 'cell__alphabet'
    cellAlphabet.innerText = alphabet[i]

    if (flagLine) {
      rowOne.append(cellAlphabet)
      board.append(rowOne)
    } else {
      rowEnd.append(cellAlphabet)
      board.append(rowEnd)
    }
  }
}

// добавление ячеек
function cellNumber(num) {
  columnOne.className = 'cell__number' //первая ячейка
  columnEnd.className = 'cell__number' //последняя ячейка

  // for (let i = 0; i < number.length; i++) {
  //   //создаем строку
  //   row = document.createElement('div')
  //   row.className = 'row'

  //   row.append(columnOne) //в строку кладем cell__number

  //   //в каждой строке создаем ячейки. Итого 8 ячеек в строке
  //   for (let j = 0; j < number.length; j++) {
  //     //в строке создаем ячейки
  //     cell = document.createElement('div')
  //     cell.className = 'cell'

  //     row.append(cell) //кладем 8 ячеек в строку
  //   }
  //   board.append(row) //добавляем всё
  //   row.append(columnEnd) //добавляем ячейку cell__number
  // }
}

function сhessBoard() {
  cellAlphabet(alphabet)
  columnOne.className = 'cell__number' //первая ячейка
  columnEnd.className = 'cell__number' //первая ячейка

  for (let i = 0; i < 8; i++) {
    // создание дива в строке
    row = document.createElement('div')
    row.className = 'row'
    row.id = 'x' + i

    columnOne.innerHTML = '111'
    // row.append(columnOne)

    for (let j = 0; j < 8; j++) {
      cell = document.createElement('div')
      cell.className = 'cell'
      cell.id = 'j' + j

      row.append(cell)
      row.firstChild.className = row.firstChild.className = 'cell__number'
    }
    // row.append(columnEnd)

    board.append(row) //добавляем всё
  }

  flagLine = false
  flagColumn = false

  cellAlphabet(alphabet)
}

сhessBoard()

// У тебя, очевидно, порядок вызовов где-то перепутан. append добавляет в конец, prepend в начало, никакой магии.
// Просто row ты добавляешь уже после того как добавлены оба row__letter, и, очевидно, не между ними, а в конец.

/* for (let i = 0; i < alphabet.length; i++) {
  let cellAlphabet = document.createElement('div')
  cellAlphabet.className = 'cell__alphabet'
  cellAlphabet.innerText = alphabet[i]
  if (i == 0) {
    rowOne.id = 'x' + i
  }
  rowOne.append(cellAlphabet)
} */
