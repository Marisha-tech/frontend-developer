// События
// click - происходит, когда кликнули на элемент
// mouseover - когда на элемент наводится мышь
// focus - когда посетитель фокусируется на элементе
// keydown - когда посетитель нажимает на клавишу
// События для окна браузера (например: resize - когда изменяется размер окна, load, readystatechange, DOMContentLoaded - загрузка файла/документа)

// ******************************События с атрибутами***********************
// function f(color) {
//     // document.getElementById('x').style.color = 'red'
//     document.getElementById('x').style.color = color
//
// }
// ********************************События без атрибутов***********************
//У объекта event есть важное свойство - target (источник события)
//Смена цвета текста у кнопки при клике на ссылки
function f(event) {
    // console.log(event)
    switch (event.target) {
        case a1:
            //Вариант изменения кнопки по тексту
            // let mas = document.querySelectorAll('button')
            // for (let item in mas) {
            //     if (item.innerText == 'кнопка 1' || item.innerText == 'кнопка 2') {
            //         item.style.color = 'orange'
            //     }
            // }
            document.querySelectorAll('button')[0].style.color = 'red';
            break;
        case a2:
            document.querySelectorAll('button')[1].style.color = 'green';
            break;
        case a3:
            document.querySelectorAll('button')[2].style.color = 'blue';
            break;
    }
}
//поиск ссылок
let a1 = document.querySelector('#a1')
let a2 = document.querySelector('#a2')
let a3 = document.querySelector('#a3')

//При клике на каждую ссылку вызываем функцию f
let a = document.querySelectorAll('a')
for (let i = 0; i < a.length; i++){
    a[i].onclick = f
}
// a1.onclick = f //ВАЖНО: запускать функцию без ()

// Генератор событий с помощью свойства addEventListener()
