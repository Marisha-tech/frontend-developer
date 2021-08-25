// window.onload - только после загрузки верстки, т.е. body. Аналог defer
window.onload = function () {
    let mas_td = document.querySelectorAll('#table2 td')
    for (let i = 0; i < mas_td.length; i++) {
        mas_td[i].onclick = function () {
            this.innerText = ''
        }
    }

    let mas_td_verh = document.querySelectorAll('#table1 td input')
    for (let i = 0; i < mas_td_verh.length; i++) {
        mas_td_verh[i].onclick = function () {
            let x = this.id.split('')
            let id_el = 'g_' + x[1]
            document.getElementById(id_el).innerText = 'Ячейка' + x[1]
        }
    }
}
