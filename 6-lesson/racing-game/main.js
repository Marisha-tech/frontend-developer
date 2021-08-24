let timer; //таймер
let cars; //массив картинок с авто
let carСoordinate; //массив координат для каждого авто
let gameBegin; //начало игры

let summa = prompt('Введите Вашу сумму');
let carDedicated = prompt('На какую машину (от 0 до 4) Вы делаете ставку?');
let stavka = prompt('Сколько ставите на выигрыш');

function goGame() {
if (gameBegin == 1) return
    gameBegin = 1
    cars = []
    for (let i = 0; i < 5; i++) {
        cars[i] = document.getElementById('p' + i)
        cars[i].style.border = 'none'
    }
    carСoordinate = []
    for (let i = 0; i < 5; i++) {
        carСoordinate[i] = 680
    }
}
