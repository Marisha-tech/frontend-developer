// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
// 3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.
let imagesTableOne = document.querySelectorAll('td') //картинки первой таблицы
// let imagesTableTwo = document.querySelector('#image-2 td')//td второй таблицы
let imgTableTwo = document.querySelector('#image-2 div img')//картинка второй таблицы БОЛЬШОЕ фото


for (let i = 0; i < imagesTableOne.length; i++) {
    imagesTableOne[i].onclick = function () {
        imgTableTwo.src = "images/" + this.id + ".jpg"
        // if (this.className) {
        //     this.classList.remove('images__allocated--border') //удаляем класс у картинки при втором клике
        // } else {
        //     this.classList.add('images__allocated--border')//добавляем картинке класс при первом клике
        //     // imgTableTwo.id = this.id //добавляем к картинке второй таблицы id выбранной картинки из первой таблицы
        //     imgTableTwo.src = "images/" + this.id + ".jpg"
        // }
    }
}
//getElementsByClassName - возвращает коллекцию. Нельзя применить addEventListener
let prev = document.getElementById('prev')
let img = document.getElementById('img')//картинка таблице 2

let imgGallery = document.querySelectorAll('td')

prev.addEventListener("click", prevElement)

function prevElement(event) {
    // let imgNow = img.querySelector('img').src//ссылка на картинку БОЛЬШАЯ

    // console.log(event.target)
    // console.log(imgTableTwo.src)//картинка БОЛЬШАЯ
    let masLink = imgTableTwo.src.split('/')
    let imgSrc = masLink[masLink.length-1]//img-1.jpg

    // console.log(img.querySelector('img').src)//ссылка на картинку во второй таблице
    // console.log(img.querySelector('img').id)//ссылка на картинку во второй таблице

    for (let i = 0; i < imagesTableOne.length; i++) {
        console.log(imagesTableOne)
    }

}

// При клике на стрелку влево:+
// узнать какая картинка выводится сейчас во второй таблице+
// в первой таблице найти эту картинку
// найти предыдущую картинку в первой таблице
// передать эту картинку во вторую таблицу
