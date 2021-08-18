//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.



let objekat1 = {
    ime: 'Pokemon1',
    vrsta: 'plavi',
    sposobnosti: ['kretanje', 'trcanje', 'skakanje'],
    karakteristike: { napad: 45, odbrana: 33, brzina: 48 }
}

let objekat2 = {
    ime: 'Pokemon2',
    vrsta: 'zeleni',
    sposobnosti: ['brzohodanje', 'sprint', 'udaranje'],
    karakteristike: { napad: 77, odbrana: 13, brzina: 99 }
}
let objekat3 = {
    ime: 'Pokemon3',
    vrsta: 'crveni',
    sposobnosti: ['plivanje', 'boksovanje'],
    karakteristike: { napad: 33, odbrana: 77, brzina: 5 }
}
let objekat4 = {
    ime: 'Pokemon4',
    vrsta: 'sivi',
    sposobnosti: ['skijanje', 'letenje', 'skakanje'],
    karakteristike: { napad: 151, odbrana: 58, brzina: 145 }
}

let pokemoni = [objekat1, objekat2, objekat3, objekat4]

let keys = Object.keys(pokemoni[1])
console.log(keys)


// let values = Object.values(pokemoni[1])
// console.log(values)



// let entry = Object.entries(pokemoni[1])
// console.log(entry)

// console.log(entry[0][0])




let body = document.querySelector('body')
let btn1 = document.createElement('button')
btn1.textContent = 'Izaberi pokemon'


btn1.addEventListener('click', () => {

    btn1.remove()

    for (let i = 0; i < pokemoni.length; i++) {

        let btn2 = document.createElement('button')
        btn2.textContent = pokemoni[i].ime
        body.append(btn2)

        btn2.addEventListener('click', () => {

            let p1 = document.createElement('p')


            let opis = Object.keys(pokemoni[i]) + ':' + Object.values(pokemoni[i])


            p1.textContent = opis

            body.append(p1)
        })
    }
})
body.append(btn1)







