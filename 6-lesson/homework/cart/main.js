// 2. Реализовать модуль корзины.
// Создать блок товаров и блок корзины.
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины.
// Корзина должна уметь считать общую сумму заказа.

let good1 = {
    name: 'Товар 1',
    img: "images/img-1.jpg",
    price: 1000,
    description: "Описание товара 1"
}
let good2 = {
    name: 'Товар 2',
    img: "images/img-2.jpg",
    price: 2000,
    description: "Описание товара 2"
}
let good3 = {
    name: 'Товар 3',
    img: "images/img-3.jpg",
    price: 3000,
    description: "Описание товара 3"
}
let good4 = {
    name: 'Товар 4',
    img: "images/img-4.jpg",
    price: 4000,
    description: "Описание товара 4"
}
let good5 = {
    name: 'Товар 5',
    img: "images/img-5.jpg",
    price: 5000,
    description: "Описание товара 5"
}
let good6 = {
    name: 'Товар 6',
    img: "images/img-6.jpg",
    price: 6000,
    description: "Описание товара 6"
}

let goods = [good1, good2, good3, good4, good5, good6]
let sum = 0
let item
window.onload = goodsList //вызов функции после загрузки страницы

function goodsList() {
    let cartRight = document.getElementsByClassName('cart__right')[0]

    for (let i = 0; i < goods.length; i++) {
        item = document.createElement('article')
        item.setAttribute('class', 'cart__item')

        //Изображение
        let itemImg = document.createElement('div')
        itemImg.setAttribute('class', 'cart__img')
        itemImg.appendChild(document.createElement('img')).setAttribute('src', goods[i].img)
        item.appendChild(itemImg)

        //Наименование товара
        let itemTitle = document.createElement('div')
        itemTitle.innerText = goods[i].name
        itemTitle.setAttribute('class', 'cart__title')
        item.appendChild(itemTitle)

        //Описание товара
        let itemText = document.createElement('span')
        itemText.setAttribute('class', 'cart__text')
        itemText.innerText = goods[i].description
        item.appendChild(itemText)

        //Цена товара
        let itemPrice = document.createElement('span')
        itemPrice.innerText = goods[i].price + '\u20bd'
        itemPrice.setAttribute('class', 'cart__price')
        item.appendChild(itemPrice)

        //Кнопка купить
        let itemBuy = document.createElement('button')
        itemBuy.innerText = 'Купить'
        itemBuy.setAttribute('class', 'cart__button')
        itemBuy.setAttribute('id', 'btn_' + i)
        itemBuy.onclick = addItem //при клике на "Купить" вызывается функция addItem
        item.appendChild(itemBuy)

        cartRight.appendChild(item)
    }
}

//Функция добавления товара в корзину
function addItem(event) {
    let selectedItem = goods[event.target.id.split('_')[1]]//выбранный товар из списка
    let cart = document.getElementsByClassName('cart__left')[0]

    let cartList = document.createElement('div')
    cartList.setAttribute('class', 'cart__list')
    cart.appendChild(cartList)

    //Добавление наименования товара в корзину
    let cartListTitle = document.createElement('span')
    cartListTitle.innerText = selectedItem.name
    cartListTitle.setAttribute('class', 'cart__list--title')
    cart.appendChild(cartListTitle)

    //Добавление цены товара в корзину
    let cartListPrice = document.createElement('span')
    cartListPrice.innerText = selectedItem.price + '\u20bd'
    cartListPrice.setAttribute('class', 'cart__list--price')
    cart.appendChild(cartListPrice)

    //Общая сумма заказа
    sum += selectedItem.price
    document.getElementsByClassName('sum')[0].textContent = 'Сумма заказа: ' + sum + '\u20bd'
}

