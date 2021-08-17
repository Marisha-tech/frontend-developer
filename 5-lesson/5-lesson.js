//DOM - объектная модель документов

// *******************getElementById************************
let header = document.getElementById('header')
// console.log(header)
// header.innerText = 'Изменен заголовок DOM'
// header.style.color = 'green'

// let block = document.getElementById('block')
// block.innerHTML += '<h3>Новый контент</h3>'

// Параметры для вставки через insertAdjacentHTML
// beforeEnd - перед закрывающим тегом
// beforeBegin - перед открывающим тегом
// afterBegin - в самом начале тега
// afterEnd - после завершения тега
// header.insertAdjacentHTML('afterEnd', 'test')

// querySelector - первый встретившийся элемент
// querySelectorAll - все элементы (массив)
// Четный заголовок другого цвета и больше размер текста
/* let headers = document.querySelectorAll('h1')
for (let i = 0, size = 24; i < headers.length; i++, size += 10) {
  headers[i].style.fontSize = size + 'px'
  headers[i].id = 'x_' + i
  if (i % 2 == 0) {
    headers[i].style.color = 'red'
  } else {
    headers[i].style.color = 'green'
  }

  if (i == 1) {
    headers[i].removeAttribute('style')
  }
}
headers[headers.length - 1].removeAttribute('style')
headers[headers.length - 1].className = 'orange text'
headers[headers.length - 2].setAttribute('class', 'text') */

// **************Добавление новых тегов на страницу*************************
/* let list = document.querySelector('ul')
let newElement = document.createElement('li') //<li></li>
newElement.innerText = '4-1 пункт'
// list.appendChild(newElement)//добавление элемента в конец списка
list.insertBefore(newElement, list.children[4]) //добавление элемента перед 5ым пунктом */

// **************************Создание ссылки********************************
/* let link = document.createElement('a')
link.href = 'https://google.com'
link.innerText = 'Перейти в гугл'
document.querySelector('div div').append(link) //добавление элемента в DOM */

// ***********************Построение таблицы***********************************
/* let table = document.createElement('table')
let tr, td
// let tr = document.createElement('tr')
// let td = document.createElement('td')
for (let i = 0; i < 10; i++) {
  tr = document.createElement('tr') //<tr></tr>

  table.appendChild(tr) //помещаем в таблицу строку

  for (let j = 0; j < 10; j++) {
    //в строке сделать 10 столбцов
    td = document.createElement('td') //<td></td>
    td.style.border = '1px solid gray'

    td.innerText = i * j
    tr.appendChild(td) //в строку добавлем по одной ячейки
  }
}
table.style.border = '1px solid gray'
document.querySelector('div').appendChild(table)
console.log(table) */

// ************************ДЗ**********************************
// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

// **********************************************************
// **********************************************************
// **********************************************************
// **********************************************************
// **********************************************************
