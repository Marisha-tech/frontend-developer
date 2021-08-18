function сhessBoard() {
  let board = document.querySelector('.board')

  let row //строка
  let cell //столбец

  let number = [8, 7, 6, 5, 4, 3, 2, 1]
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  //добавление первой строки
  let i = 0
  let rowOne = document.createElement('div')
  rowOne.className = 'row__letter'
  rowOne.id = 'x' + i

  board.append(rowOne)

  for (let i = 0; i < 8; i++) {
    //создание дива в строке
    row = document.createElement('div')
    row.className = 'row'
    row.id = 'x' + i

    //добавление в первую строку ячеек
    let cellNumber = document.createElement('div')
    cellNumber.className = 'cell__number'
    cellNumber.innerText = number[i]

    // rowOne.id = 'x' + i
    // rowEnd.id = 'x' + i
    rowOne.append(cellNumber) //начало
    // rowEnd.append(cellNumber) //конец

    for (let j = 0; j < 8; j++) {
      cell = document.createElement('div')
      cell.className = 'cell'

      row.append(cell)
    }

    board.append(row)
  }
  //добавление последней строки
  let rowEnd = document.createElement('div') //создаем новый элемент
  rowEnd.className = 'row__letter'
  for (let i = 0; i < number.length; i++) {
    let cellAlphabet = document.createElement('div')
    cellAlphabet.className = 'cell__alphabet'
    cellAlphabet.innerText = number[i]
    rowEnd.append(cellAlphabet)
  }
  rowEnd.id = 'x' + i

  board.append(rowEnd)
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
