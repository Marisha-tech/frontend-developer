let board = document.querySelector('.board')//ищем div c классом board

let number = [8, 7, 6, 5, 4, 3, 2, 1]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let alphabetFigures = ['rook', 'horse', 'elephant', 'queen', 'king', 'elephant', 'horse', 'rook']

сhessBoard();

function сhessBoard() {
    cellAlphabet(alphabet, 'cell__alphabet')//первая строка с алфавитом
    rowCell();
    cellAlphabet(alphabet, 'cell__alphabet')//последняя строка с алфавитом
}

//добавление обеих строк
function cellAlphabet(mas, name) {
    let row = document.createElement('div')//создаем строку
    cellNumberDef(row);
    row.className = 'row__letter'
    for (let i = 0; i < mas.length; i++) {
        let cellAlphabet = document.createElement('div')
        cellAlphabet.className = name
        cellAlphabet.innerText = mas[i]
        row.append(cellAlphabet)
        board.append(row)
    }
    cellNumberDef(row);
}

//функция для создания ячеек в строке
function rowCell() {

    let index1 = number.length;
    let index2 = number.length;
    for (let i = 0; i < number.length; i++) {
        let row = document.createElement('div')
        row.className = 'row'
        row.id = 'x' + i
        cellNumber(row, index1--);
        cellSquare(row);
        cellNumber(row, index2--);
    }
}

//функция для пустой ячейки в строке с алфавитом
function cellNumber(row, index) {
    let cell = document.createElement('div')
    cell.className = 'cell__number'
    cell.innerText = index;
    row.append(cell)
    board.append(row)
}

//функция для пустой ячейки в строке с цифрами
function cellNumberDef(row) {
    let cell = document.createElement('div')
    cell.className = 'cell__number'
    row.append(cell)
    board.append(row)
}

//создание ячеек
function cellSquare(row) {
    for (let i = 0; i < number.length; i++) {
        let cell = document.createElement('div')
        cell.className = 'cell'

        pawnFigures(row, cell, i)
        otherFigures(row, cell)

        row.append(cell)
        board.append(row)
    }
}

//Ячейки с другими фигурами
function otherFigures(row, cell) {
    if (row.id == 'x0') {
        cell.className += ' figure__other--black'
    } else if (row.id == 'x7') {
        cell.className += ' figure__other--white'
    }
    switch (cell.innerText) {
        case 'rook':
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#rook"></use>\n' +
                ' </svg>'
            break
        case 'horse':
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#horse"></use>\n' +
                ' </svg>'
            break
        case 'elephant':
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#elephant"></use>\n' +
                ' </svg>'
            break
        case 'queen':
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#queen"></use>\n' +
                ' </svg>'
            break
        case 'king':
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#king"></use>\n' +
                ' </svg>'
            break
    }
}

//Ячейки с пешками
function pawnFigures(row, cell, i) {
    switch (row.id) {
        case 'x0':
            cell.innerText = alphabetFigures[i]
            break
        case 'x1':
            cell.className += ' figure__pawn--black'
            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#pawn"></use>\n' +
                ' </svg>'
            break
        case 'x6':
            cell.className += ' figure__pawn--white'

            cell.innerHTML = ' <svg>\n' +
                '     <use xlink:href="images/sprite.svg#pawn"></use>\n' +
                ' </svg>'
            break
        case 'x7':
            cell.innerText = alphabetFigures[i]
            break
    }
}
