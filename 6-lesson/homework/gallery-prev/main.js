// 3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.

let imgSmall = document.querySelectorAll('#small img')
let imgBig = document.querySelector('#big-img')

// Поскольку querySelectorAll возвращает набор элементов, следует перебрать его и добавить прослушиватель событий.
imgSmall.forEach(el => {
    el.addEventListener('click', bigImg)
})

function bigImg(event) {
    console.log(event.target.src)
    let srcSmall = event.target.src.replace('small', 'big')//нашли элемент по которому кликнули -> заменили small на big
    imgBig.src = srcSmall //в src большой картинки поместили src измененной маленькой картинки
}

function ImageError() {
    console.log('Такой большой картинки нет');
    imgBig.src = 'http://localhost:63342/Frontend%20Developer%20Part%203%20of%205%20(2020)/6-lesson/homework/gallery-1/images/placeholder.png'
}

//Предыдущее/следующее фото
let i = 0
function prev() {
    i--
    if (i == -1) {
        i = imgSmall.length - 1
    }
    imgBig.src = imgSmall[i].src
}

function next() {
    i++
    console.log(imgSmall[i])
    if (i >= imgSmall.length) {
        i = 0
    }
    imgBig.src = imgSmall[i].src
}
