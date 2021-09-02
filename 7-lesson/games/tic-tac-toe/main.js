let board = document.getElementsByClassName('board')[0], //игровое поле
    player = document.getElementsByClassName('gamer')[0], //строка хода
    element, //внешняя ячейка
    innerElement, //вложенная ячейка
    gamer = true, // показывает какой игрок сейчас ходит. Если true, тогда ходят крестики
    gameTable = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ], //матрица игры
    nullCount = 9, //количество оставшихся ходов
    winner = null //кто выиграл

player.innerText = 'Сейчас ходит Х'

//генерация игрового поля
//i - номер ячейки
for (let i = 0; i < 9; i++) {
    element = document.createElement('div')
    element.classList.add('cell')
    innerElement = document.createElement('div')
    innerElement.classList.add('cell__inner')
    innerElement.onclick = tableClick

    //каждой ячейке добавить атрибут x и y
    innerElement.setAttribute('x', (i % 3).toString())
    innerElement.setAttribute('y', parseInt(i / 3).toString())
    element.appendChild(innerElement)
    board.appendChild(element)
}

document.getElementsByClassName('button')[0].onclick = reset()

//Событие нажатия на ячейку
function tableClick() {
    //проверка содержимого ячейки
    if (this.innerText == '') {
        this.innerText = gamer ? 'X' : 'O'//чему равено gamer. Изначально gamer = true (true - крестик)
        let y = this.getAttribute('y'),//получаем значения атрибутов
            x = this.getAttribute('x')
        gameTable[y][x] = gamer
        nullCount-- //уменьшаем количество ходов

        // условия проверки выигрыша
        if (
            (gameTable[y][0] === gamer && gameTable[y][1] === gamer && gameTable[y][2] === gamer) ||
            (gameTable[0][x] === gamer && gameTable[1][x] === gamer && gameTable[2][x] === gamer) ||
            (gameTable[0][0] === gamer && gameTable[1][1] === gamer && gameTable[2][2] === gamer) ||
            (gameTable[2][0] === gamer && gameTable[0][0] === gamer && gameTable[0][2] === gamer)
        ) {
            winner = gamer
        }
        gamer = !gamer
        player.innerText = gamer ? 'Сейчас ходит X' : 'Сейчас ходит О'

        if (nullCount == 0 || winner !== null) { //если ходов не осталось или победительн не null
            if (winner !== null) {
                if (confirm('Победители ' + (winner ? 'X' : 'O') + '.\nЖелаете сыграть ещё?')) {
                    reset()
                }
            } else if (confirm('Игра закончилась в ничью.\nЖелаете сыграть ещё?')) {
                reset()
            }
        }
    } else {
        alert('Недопустимый ход')
    }
}

//Функция сброса параметров игры
function reset() {
    gamer = true
    gameTable = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ], //матрица игры
        nullCount = 9, //количество оставшихся ходов
        winner = null //кто выиграл

    let table = document.getElementsByClassName('cell__inner')
    for (let i = 0; i < table.length; i++) {
        table[i].innerText = ''
    }
    player.innerText = 'Сейчас ходит Х'
}
