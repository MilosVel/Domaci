// // 1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5


x = [3, 5, 8, 15, 2, 5, 25, 33, 55]

function funkcija(niz) {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 5 == 0) {
            console.log(niz[i])
        }
    }
}
funkcija(x)




//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)
//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

////////////////////////////////////////////ZA PETAK////////////////////////////////////
//4. Sortirati pokemone po brzini, rastuće.
//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.



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

// // 3. ZADATAK

function sposobnostipokenona(niz) {
    let nizsposobnosti = []
    for (i = 0; i < pokemoni.length; i++) {

        nizsposobnosti.push(...niz[i].sposobnosti)
    }
    console.log(nizsposobnosti)
}

sposobnostipokenona(pokemoni)


// // 4 ZADATAK I nacin

// let tmp = []
// let properti
// let vrednost
// for (let i = 0; i < pokemoni.length; i++) {
//     // console.log(pokemoni[i].ime, pokemoni[i].karakteristike.brzina)
//     properti = pokemoni[i].ime
//     vrednost = pokemoni[i].karakteristike.brzina
//     console.log(properti, vrednost) // od vrednosti koje ispisuje ovaj console.log bih trebao da napravim niz objekata
//     // tmp.push({ pokemoni[i].ime : vrednost }) // ovako ne moze da se napravi niz objekta
//     tmp.push(vrednost)

// }
// console.log(tmp.sort(function (a, b) { return a - b })) //vraca samo vrednosti, a verovatno bi trebalo da vraca i ime pokemona sa datom vrednoscu



// 4. ZADATAK II NACIN

// let tmp = []
// let properti
// let vrednost
// for (let i = 0; i < pokemoni.length; i++) {
//     properti = Object.values(pokemoni[i])[0]
//     value = pokemoni[i].karakteristike.brzina
//     console.log(properti, value)
//     tmp.push({ properti: value })
//     // tmp.push(Object.values(pokemoni[i])[0] : value) // ovo ne vraca odgovarajuci objekat

// }
// console.log(tmp)







// // 4. ZADATAK III nacin

// function sortiranje(niz) {
//     let sortiranipokemoni = []
//     for (let i = 0; i < niz.length; i++) {

//         // sortiranipokemoni.push([niz[i].ime, niz[i].karakteristike.brzina])  //Vraca niz i u njemu su nizovi sa imenom i brziom za svakog pokemona, ali ne znam kako dalje mogu da sortiram te nizove unutar glavng niza a da ujedno zadrzim ime pokemona.

//         sortiranipokemoni.push(niz[i].karakteristike.brzina)
//     }
//     sortiranipokemoni.sort(function (a, b) { return a - b })
//     console.log(sortiranipokemoni)
// }
// sortiranje(pokemoni)




// // 5. ZADATAK

function pobednik(niz) {
    let max = 0
    let ime = ''
    for (let i = 0; i < niz.length; i++) {
        if (max < niz[i].karakteristike.napad) {
            max = niz[i].karakteristike.napad
            ime = niz[i].ime
        }
    }
    return ime
}

console.log(pobednik(pokemoni))