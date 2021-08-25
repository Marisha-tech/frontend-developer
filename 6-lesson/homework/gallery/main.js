// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
// Найти блок с нижней картинкой, которую нужно заменить
// Найти картинку, по которой кликнули мышкой
// Заменить картинку
let imagesTableOne = document.querySelectorAll('td') //картинки первой таблицы
// let imagesTableTwo = document.querySelector('#image-2 td')//td второй таблицы
let imgTableTwo = document.querySelector('#image-2 td img')//кантинка второй таблицы


for (let i = 0; i < imagesTableOne.length; i++) {
    imagesTableOne[i].onclick = function () {

        // this.classList.toggle('images__allocated--border')
        // imgTableTwo.id = this.id //добавляем к картинке второй таблицы id выбранной картинки из первой таблицы
        // imgTableTwo.src = "images/" + this.id + ".jpg"
        console.log(this.className)
        if (this.className) {
            this.classList.remove('images__allocated--border') //удаляем класс у картинки при втором клике
        } else {

            this.classList.add('images__allocated--border')//добавляем картинке класс при первом клике
            // imagesTableTwo.id = this.id //img-1
            imgTableTwo.id = this.id //добавляем к картинке второй таблицы id выбранной картинки из первой таблицы
            imgTableTwo.src = "images/" + this.id + ".jpg"
        }
    }
}

