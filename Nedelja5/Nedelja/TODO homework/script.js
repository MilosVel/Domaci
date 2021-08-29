// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci da je item uradjen).



import { data, add, count, deleteById, changeById } from './service.js'


let forma = document.querySelector('#forma')
let itemDiv = document.querySelector('#item')
let inputItem = document.querySelector('#desc')


function dodajUDom(item) {

    let divNov = document.createElement('div')
    // let p1 = document.createElement('p')
    // p1.textContent = item.id
    let p2 = document.createElement('p')
    p2.textContent = item.desc
    //divNov.classList.add('boja') // ako treba da dodam CSS

    let input = document.createElement('input')
    input.type = 'checkbox'


    if (item.done) {
        p2.classList.add('boja')
        input.checked = true
    } else {
        p2.classList.remove('boja')

    }

    let btnDelete = document.createElement('button')
    btnDelete.textContent = 'Obrisi zadatak'
    btnDelete.addEventListener('click', () => {
        divNov.remove()
        // let index = data.findIndex((obj) => { return obj.id == item.id })
        // data.splice(index, 1)
        deleteById(item.id)
        console.log(data)
    })

    input.addEventListener('change', (event) => {

        let i = data.findIndex((obj) => { return obj.id == item.id })
        if (event.target.checked) {
            p2.classList.add('boja')
            //console.log('cekirano')
            //let i = data.findIndex((obj) => { return obj.id == item.id })
            data[i].done = true
            console.log(data[i])

        } else {
            p2.classList.remove('boja')
            // console.log('nije cekirano')
            //let i = data.findIndex((obj) => { return obj.id == item.id })
            data[i].done = false
            console.log(data[i])

        }
    })
    let label = document.createElement('label')
    label.textContent = 'Cekiraj ako je zadatak odradjen'



    let btnChange = document.createElement('button')
    btnChange.textContent = 'Change'
    btnChange.addEventListener('click', () => {

        let j = data.findIndex((obj) => obj.id == item.id)
        let pro = prompt('Unesite nov opis zadatka')
        if (pro) {
            let novItem = {
                id: j + 1,
                desc: pro,
                done: data[j].done
            }
            p2.textContent = pro
            console.log(novItem, j)

            changeById(j, novItem)
            console.log(data)

        } else {
            alert('Morate opisati zadatak koji menjate')
        }
    })


    divNov.append(p2, input, label, btnDelete, btnChange)
    itemDiv.append(divNov)
}

data.forEach((obj) => {
    dodajUDom(obj)
})

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    let zadatak = {
        id: count, //iaako ova linija izlgleda suvisna, bez nje ispis konzole nije dobar
        desc: inputItem.value,
        done: false
    }

    add(zadatak)

    dodajUDom(zadatak)

    console.log(data)
    forma.reset()
})