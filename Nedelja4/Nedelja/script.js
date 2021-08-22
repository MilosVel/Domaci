/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 *
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */



//PRVI ZADATAK
let btn = document.querySelector('#btn')
let tabela = document.querySelector('#tabela')
let prvired = document.querySelector('#prvired')

btn.addEventListener('click', () => {
    let drugired = prvired.cloneNode(true)
    tabela.append(drugired)
})


// DRUGI ZADATAK

let div = document.querySelector('#sabiranje')
let prvisabirak = document.querySelector('#prvisabirak')
let drugisabirak = document.querySelector('#drugisabirak')
let btnZbir = document.querySelector('#zbir')
let divZaZbir = document.querySelector('#za_zbir')

console.log(div, prvisabirak, drugisabirak, zbir, divZaZbir)

btnZbir.addEventListener('click', () => {
    let p = document.createElement('p')
    let prvi = Number(prvisabirak.value)
    let drugi = Number(drugisabirak.value)
    console.log(prvi, drugi)

    p.textContent = prvi + drugi
    divZaZbir.append(p)

})




// TRECI ZADATAK

let inputCheckbox = document.querySelector('#selektovanje')
let div3 = document.querySelector('#kalkulator')

inputCheckbox.addEventListener('change', (event) => {

    // if (event.target.checked) {
    //     console.log('Cekirano')
    // } else {
    //     console.log('Nije cekirano')
    // }

    if (event.target.checked) {


        let div4 = document.createElement('div')
        let p2 = document.createElement('p')
        p2.textContent = 'Kalkulator'
        let input4 = document.createElement('input')
        let input5 = document.createElement('input')
        let p3 = document.createElement('p')
        div4.append(p2, p3, input4, input5)
        div3.append(div4)


    } if (!event.target.checked) {

        div3.remove()
    }
})



