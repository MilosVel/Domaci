
// Napisati validaciju za formu koja sadrzi polja:
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!



function imaBroj(str) {
    return /\d/.test(str)
}


function imaVelikoSlovo(str) {
    return chars = /[A-Z]/.test(str)
}


function konvertovanje(str) {
    let str1 = str.split('')
    let ispravnoIme = ''
    for (let i = 0; i < str1.length; i++) {
        if (i == 0) {
            ispravnoIme += str1[i].toUpperCase()
        } else {
            ispravnoIme += str1[i].toLowerCase()
        }
    }
    return ispravnoIme
}



isValid = true
let forma = document.querySelector('#forma')

let inputName = document.querySelector('#name')
let inputSurname = document.querySelector('#surname')
let inputPassword = document.querySelector('#passw')
let inputConfirm = document.querySelector('#confirm')


let select = document.querySelector('#select')


let nameDiv = document.querySelector('#nameDiv')
let surnameDiv = document.querySelector('#surnameDiv')
let passwordDiv = document.querySelector('#passwDiv')
let confirmmDiv = document.querySelector('#confirmDiv')
let divIspis = document.querySelector('#ispis')




forma.addEventListener('submit', (event) => {
    event.preventDefault()


    if (inputName.value.length < 5 || inputName.value.length > 15) {
        nameDiv.textContent = ''
        nameDiv.textContent = ' Mora imati vise od 5 slova'
        isValid = false
    }
    if (inputSurname.value.length < 5 || inputSurname.value.length > 20) {
        surnameDiv.textContent = ''
        surnameDiv.textContent = ' Mora imati vise od 5 slova'
        isValid = false
    }
    if (inputPassword.value.length < 5 || !imaBroj(inputPassword.value) || !imaVelikoSlovo(inputPassword.value)) {
        passwordDiv.textContent = ''
        passwordDiv.textContent = ' Mora imati vise od 5 slova'
        isValid = false
    }
    if (inputConfirm.value.length < 5 || !imaBroj(inputConfirm.value) || !imaVelikoSlovo(inputConfirm.value)) {
        confirmDiv.textContent = ''
        confirmDiv.textContent = ' Mora imati vise od 5 slova'
        isValid = false
    }


    let niz = []


    let polaznik
    if (isValid) {
        polaznik = {
            ime: konvertovanje(inputName.value.trim()),
            prezime: konvertovanje(inputSurname.value.trim()),
            sifra: inputPassword.value,
            potvrdasifre: inputConfirm.value,
            kurs: select.value
        }
        niz.push(polaznik)
        console.log(niz)
        console.log('radi')



        let divContainer = document.createElement('div')

        let pName = document.createElement('p')
        let pSurname = document.createElement('p')
        let pPassword = document.createElement('p')
        let pConfirm = document.createElement('p')



        let pKurs = document.createElement('p')


        pName.textContent = polaznik.ime
        pSurname.textContent = polaznik.prezime
        pPassword.textContent = polaznik.sifra
        pConfirm.textContent = polaznik.potvrdasifre
        pKurs.textContent = polaznik.kurs

        divContainer.append(pName, pSurname, pPassword, pConfirm, pKurs)

        divIspis.append(divContainer)


    }

    inputName.value = ''
    inputSurname.value = ''
    inputPassword.value = ''
    inputConfirm.value = ''
    select.value = ''
})








