let timer; //таймер
let cars = []; //массив картинок с авто
let carСoordinate = []; //массив координат для каждого авто
let gameBegin; //начало игры

let summa = prompt('Введите Вашу сумму');
let carDedicated = prompt('На какую машину (от 0 до 4) Вы делаете ставку?');
let stavka = prompt('Сколько ставите на выигрыш');

function goGame() {
    if (gameBegin == 1) return
    gameBegin = 1

    for (let i = 0; i < 5; i++) {
        cars[i] = document.getElementById('p' + i)
        cars[i].style.border = 'none'
    }

    for (let i = 0; i < 5; i++) {
        carСoordinate[i] = 680//текущая координата каждой машины
    }
    //20 раз в секунду вызываем timerGo
    timer = setInterval(timerGo, 50)//setInterval- функция, которая запускается какждые 50милисекунд (т.е. 20 раз в секунду, тк в одной секунде 1000 милисекунд)
    // setTimeout(timerGo, 5000)//setTimeout - отложенный запуск (спустя 5 секуд запустится timerGo)
}

function timerGo() {
    for (let i = 0; i < 5; i++) {

        carСoordinate[i] = carСoordinate[i] - Math.floor((Math.random() * 7 + 2))//случайный шаг перемещения автомобиля

        //если победили
        if (carСoordinate[i] <= 0) {
            clearInterval(timer)//очистка таймера
            gameBegin = 0
            if (i == carDedicated) {//индекс машины совпадает с номером, который поставили
                console.log('Вы победили')
                summa += stavka
            } else {
                console.log('Вы проиграли. До финиша доехала машина с номером ' + i)
                summa -= stavka
                console.log('Ваша сумма = ' + summa)
            }
            cars[i].style.border = '5px ridge yellow'
            return
        }
        //если проиграли
        cars[i].style.left = carСoordinate[i] + 'px'
    }
}

