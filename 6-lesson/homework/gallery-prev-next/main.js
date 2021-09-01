// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
// 3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.
let imagesTableOne = document.querySelectorAll('td') //картинки первой таблицы
let imgTableTwo = document.querySelector('#image-2 div img')//картинка второй таблицы БОЛЬШОЕ фото

for (let i = 0; i < imagesTableOne.length; i++) {
    imagesTableOne[i].onclick = function (event) {
        imgTableTwo.src = "images/" + this.id + ".jpg"
    }
}

//getElementsByClassName - возвращает коллекцию. Нельзя применить addEventListener
let prev = document.getElementById('prev')
let img = document.getElementById('img')//картинка таблице 2
prev.addEventListener("click", prevElement)

function prevElement(event, id) {

    // let imgNow = img.querySelector('img').src//ссылка на картинку БОЛЬШАЯ
    // console.log(img.querySelector('img').id)//ссылка на картинку во второй таблице

    // console.log(event.target)
    // console.log(imgTableTwo)//картинка БОЛЬШАЯ

    // let masLink = imgTableTwo.src.split('/')
    // let imgSrc = masLink[masLink.length-1].split('.')//img-1.jpg
    //
    // for (let i = 0; i < imagesTableOne.length; i++) {
    //     let id = imagesTableOne[i].id
    //     // console.log(imagesTableOne[i].id)
    //     if (id = imgSrc) {
    //         // console.log(event.target)
    //     }
    // }
}

// При клике на стрелку влево:+
// узнать какая картинка выводится сейчас во второй таблице+
// в первой таблице найти эту картинку
// найти предыдущую картинку в первой таблице
// передать эту картинку во вторую таблицу

