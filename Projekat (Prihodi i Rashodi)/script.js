let buzdet = document.querySelector('#budzet')
let prihodi = document.querySelector('#prihodi')
let rashodi = document.querySelector('#rashodi')
let btnProcenat = document.querySelector('#procenat')

let forma = document.querySelector('#forma')
let inputSelect = document.querySelector('#dropdown')
let inputOpis = document.querySelector('#opis')
let inputIznos = document.querySelector('#iznos')

let btnPotvrdi = document.querySelector('#potvrdi')

let ulPrihodi = document.querySelector('#ul-prihodi')
let ulRashodi = document.querySelector('#ul-rashodi')

// let ukupanPrihod = 0
// let ukupanRashod = 0
let procenatRashoda = 0
let procenatRashoda1 = 0

let niz = []
let item = {}
let count = 0


function addToDom(el, listaPrihodailiRashoda) {
    let li = document.createElement('li')
    li.textContent = `${el.opis} =${el.iznos}`

    li.addEventListener('mouseenter', () => {

        let btnDel = document.createElement('button')
        btnDel.textContent = 'Izbrisi'
        btnDel.addEventListener('click', () => {
            li.remove()
            let indeks = niz.indexOf(el)
            niz.splice(indeks, 1)
            console.log(niz)
            izracunavanje(niz)


            ulPrihodi.innerHTML = ''
            ulRashodi.innerHTML = ''

            niz.forEach((el) => {
                if (el.vrsta == 'prihod') {
                    addToDom(el, ulPrihodi)
                } if (el.vrsta == 'rashod') {
                    addToDom1(el, ulRashodi)
                }
            })


        })

        li.append(btnDel)
    })
    listaPrihodailiRashoda.append(li)
}


function addToDom1(el, listaPrihodailiRashoda) {
    let li = document.createElement('li')
    //li.textContent = `${el.opis} =${el.iznos}`
    li.textContent = `${el.opis} -${el.iznos} (${el.iznos / (izracunavanje(niz) / 100)}%)`


    li.addEventListener('mouseenter', () => {

        let btnDel = document.createElement('button')
        btnDel.textContent = 'Izbrisi'
        btnDel.addEventListener('click', () => {
            li.remove()
            let indeks = niz.indexOf(el)
            niz.splice(indeks, 1)
            console.log(niz)
            izracunavanje(niz)


            ulPrihodi.innerHTML = ''
            ulRashodi.innerHTML = ''

            niz.forEach((el) => {
                if (el.vrsta == 'prihod') {
                    addToDom(el, ulPrihodi)
                } if (el.vrsta == 'rashod') {
                    addToDom1(el, ulRashodi)
                }
            })

        })

        li.append(btnDel)
    })


    listaPrihodailiRashoda.append(li)
}





function izracunavanje(niz) {
    let ukupanPrihod = 0
    let ukupanRashod = 0


    niz.forEach((el) => {
        if (el.vrsta == 'prihod') {
            ukupanPrihod += el.iznos
        } if (el.vrsta == 'rashod') {
            ukupanRashod += el.iznos
        }
    })

    prihodi.textContent = ukupanPrihod
    rashodi.textContent = ukupanRashod
    buzdet.textContent = ukupanPrihod - ukupanRashod
    btnProcenat.textContent = ukupanRashod * 100 / ukupanPrihod

    return ukupanPrihod

}



btnPotvrdi.addEventListener('click', (event) => {
    event.preventDefault()

    ulPrihodi.innerHTML = ''
    ulRashodi.innerHTML = ''

    if (inputOpis.value && Number(inputIznos.value) > 0) {

        count++
        item = {
            id: count,
            vrsta: inputSelect.value,
            opis: inputOpis.value,
            iznos: Number(inputIznos.value)
        }
        niz.push(item)


    }





    niz.forEach((el) => {
        if (el.vrsta == 'prihod') {
            addToDom(el, ulPrihodi)
        } if (el.vrsta == 'rashod') {
            addToDom1(el, ulRashodi)
        }
    })

    izracunavanje(niz)

    forma.reset()


})







