// ## Prodavnica



// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

// DODATNO , NE MORA:
// 4. Ako je korisnik admin moze da doda nov proizvod




let nizPrehrambenihKorpa = []
let nizBTehnikaKorpa = []




class Kupac {
    //static korpaNiz = []
    constructor(ime, sifra) {
        this.ime = ime
        this.sifra = sifra
        this.korpa = []
    }
}

let kupac1 = new Kupac('Milos', 12)
let kupac2 = new Kupac('Srecko', 123)
let kupac3 = new Kupac('Nenad', 123)

let listaRegistrovanihKupaca = [kupac1, kupac2, kupac3]
//console.log(listaRegistrovanihKupaca)


//console.log(listaRegistrovanihKupaca[0].korpa)


let kupac5 = new Kupac('Milos', 12)
//console.log(kupac1 === kupac1)
// console.log(listaRegistrovanihKupaca.includes(kupac5))


let forma = document.querySelector('#forma')
let inputUserName = document.querySelector('#username')
let inputPassword = document.querySelector('#password')





function zaFormu(event) {
    //(event) => 

    event.preventDefault()

    let kupac = new Kupac(inputUserName.value, Number(inputPassword.value))
    //console.log(kupac.ime == listaRegistrovanihKupaca[0].ime)
    console.log(kupac)

    let index = listaRegistrovanihKupaca.findIndex((el) => el.ime == kupac.ime && el.sifra == kupac.sifra)
    console.log(index)


    // listaRegistrovanihKupaca.forEach((el) => { console.log(el == kupac) })
    // listaRegistrovanihKupaca.forEach((el) => {
    //     if (el === kupac) {

    //         console.log('radi')
    //         console.log(kupac)
    //     }
    // })


    return index
}


forma.addEventListener('submit', zaFormu)













class Proizvod {
    static niz = []
    constructor(naziv, cena, dostupnaKolicina) {
        this.naziv = naziv
        this.cena = cena
        this.dostupnaKolicina = dostupnaKolicina
        Proizvod.niz.push(this)
    }
}


// let p = new Proizvod('stt', 23, 43)
// // console.log(p)
// // console.log(Proizvod.niz)


class PrehrambeniProzivod extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, rokTrajanja) {
        super(naziv, cena, dostupnaKolicina)
        this.rokTrajanja = rokTrajanja
    }
}


let prehrambeni1 = new PrehrambeniProzivod('Hleb', 234, 54, 23)
let prehrambeni2 = new PrehrambeniProzivod('Mleko', 55, 2, 64)
let prehrambeni3 = new PrehrambeniProzivod('Meso', 75, 11, 24)



class BelaTehnika extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, garancija) {
        super(naziv, cena, dostupnaKolicina)
        this.garancija = garancija
    }
}

let bt1 = new BelaTehnika('Sporet', 2324, 24, 2)
let bt2 = new BelaTehnika('Frizider', 2324, 24, 3)
let bt3 = new BelaTehnika('Televizor', 2324, 24, 5)

//console.log(Proizvod.niz)
// console.log(Proizvod.niz[2])



let divKorpa = document.querySelector('.korpa')
//console.log(divKorpa)
let divProizvodi = document.querySelector('.proizvodi')

function addToDomPrehrambeniProzivod(el) {
    let divProizvod = document.createElement('div')
    divProizvod.classList.add('.proizvod')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    p1.innerHTML = `Naziv ${el.naziv}`
    p2.innerHTML = `Cena: ${el.cena}`
    p3.innerHTML = `Rok trajanja: ${el.rokTrajanja}`
    let input = document.createElement('input')
    input.id = 'kolicina'

    let btn = document.createElement('button')
    btn.textContent = 'Potvrdi'
    btn.addEventListener('click', (event) => {
        //console.log(el)
        // console.log(input.value)

        //console.log(` indekx je ${zaFormu(event)}`)
        let indeks = zaFormu(event)
        //console.log(listaRegistrovanihKupaca[indeks].korpa)

        // listaRegistrovanihKupaca[indeks].korpa.push(el)
        // console.log(`Korpa je ${listaRegistrovanihKupaca[indeks].korpa}`)

        let divProizvod = document.createElement('div')
        divProizvod.classList.add('.proizvod')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        p1.innerHTML = `Naziv ${el.naziv}`
        p2.innerHTML = `Cena: ${el.cena}`
        p3.innerHTML = `Rok trajanja: ${el.rokTrajanja}`


        let btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener('click', () => {
            divProizvod.remove()
            let i = nizPrehrambenihKorpa.indexOf(el)
            nizPrehrambenihKorpa.splice(i, 1)
            console.log(nizPrehrambenihKorpa)
        })



        divProizvod.append(p1, p2, p3, btnDelete)
        divKorpa.append(divProizvod)

        nizPrehrambenihKorpa.push(el)
        console.log(nizPrehrambenihKorpa)

    })

    divProizvod.append(p1, p2, p3, input, btn)

    divProizvodi.append(divProizvod)
}






function addToDomBelaTehnika(el) {
    let divProizvod = document.createElement('div')
    divProizvod.classList.add('.proizvod')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    p1.innerHTML = `Naziv ${el.naziv}`
    p2.innerHTML = `Cena: ${el.cena}`
    p3.innerHTML = `Rok garancija: ${el.garancija}`
    let input = document.createElement('input')
    input.id = 'kolicina'
    let btn = document.createElement('button')
    btn.textContent = 'Potvrdi'
    btn.addEventListener('click', () => {

        let divProizvod = document.createElement('div')
        divProizvod.classList.add('.proizvod')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        p1.innerHTML = `Naziv ${el.naziv}`
        p2.innerHTML = `Cena: ${el.cena}`
        p3.innerHTML = `Rok garancija: ${el.garancija}`

        let btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener('click', () => {
            divProizvod.remove()
            let i = nizBTehnikaKorpa.indexOf(el)
            nizBTehnikaKorpa.splice(i, 1)
            console.log(nizBTehnikaKorpa)
        })


        divProizvod.append(p1, p2, p3, btnDelete)
        divKorpa.append(divProizvod)

        nizBTehnikaKorpa.push(el)
        console.log(nizBTehnikaKorpa)
    })

    divProizvod.append(p1, p2, p3, input, btn)
    divProizvodi.append(divProizvod)
}




Proizvod.niz.forEach((el) => {
    //console.log(Object.keys(el)[3])
    if (Object.keys(el)[3] == 'rokTrajanja') {
        //console.log(Object.keys(el)[3])
        addToDomPrehrambeniProzivod(el)
    }

    if (Object.keys(el)[3] == 'garancija') {
        //console.log(el)
        //console.log(Object.keys(el)[3])
        addToDomBelaTehnika(el)
    }
})












