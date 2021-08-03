/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.
*/




// let puz = 0
// let drvo = 22
// let dan = 0

// while (drvo > puz) {
//     drvo += 1
//     puz += 5
//     dan += 1
//     if (drvo > puz) {
//         console.log(`Dan ${dan}: puz je presao ${puz} cm, visina drveta je ${drvo} , ostalo mu je jos ${drvo - puz} cm`)
//     } else {
//         if (drvo - puz == 0) {
//             console.log(`Puz se popeo na drvo u danu broj ${dan} `)
//         } else if (drvo - puz !== 0) { console.log(`Puz se popeo na drvo u danu broj ${dan} i tog dana je mogao da predje jos ${puz - drvo} cm`) }
//     }
// }







/*
2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

let dan = 8
let iznos = 1000
let zaposleni = true
let student = true
let penzioner = false
let firma = false
let popust
let popust_vikend


switch (dan) {
    case 1: case 2: case 3: case 4: case 5:
        if (iznos > 5000 && zaposleni) {
            popust = iznos * 5 / 100
            console.log(`Vas racun je ${iznos}, ali zaposleni radnim danima na ovaj racun imaju popust od ${popust} i treba da platite ${iznos - popust}`)
        }
        else if (iznos > 3000 && student) {
            popust = iznos * 20 / 100
            console.log(`Vas racun je ${iznos}, ali studenti radnim danima na ovja racun imaju popust od ${popust} i treba da platite${iznos - popust}`)
        }
        else if (iznos > 2000 && penzioner) {
            popust = iznos * 30 / 100
            console.log(`Vas racun je ${iznos}, ali penzioneri radnim danima na ovaj racun imaju popust od ${popust} i treba da platite ${iznos - popust}`)
        }
        else if (iznos > 10000 && firma) {
            popust = iznos * 10 / 100
            console.log(`Vas racun je ${iznos}, ali frime radnim danima na ovaj racun imaju popust od ${popust} i treba da platite ${iznos - popust} `)
        }
        else {
            console.log(`Vas racun je ${iznos} dinara. Zelimo prijatan ostatak radne nedelje`)
        }
        break
    case 6: case 7:
        if (iznos > 5000 && zaposleni) {
            popust = iznos * 5 / 100
            popust_vikend = ((iznos - popust) * 5 / 100) + popust
            console.log(`Vas racun je ${iznos}, ali zaposleni imaju VIKEND popust od ${popust_vikend} i treba da platite ${iznos - popust_vikend}`)
        }
        else if (iznos > 3000 && student) {
            popust = iznos * 20 / 100
            popust_vikend = (iznos - popust) * 5 / 100 + popust
            console.log(`Vas racun je ${iznos}, ali studenti imaju VIKEND popust od ${popust_vikend} i treba da platite${iznos - popust_vikend}`)
        }
        else if (iznos > 2000 && penzioner) {
            popust = iznos * 30 / 100
            popust_vikend = (iznos - popust) * 5 / 100 + popust
            console.log(`Vas racun je ${iznos}, ali penzioneri imaju VIKEND popust od ${popust_vikend} i treba da platite ${iznos - popust_vikend}`)
        }
        else if (iznos > 10000 && firma) {
            popust = iznos * 10 / 100
            popust_vikend = (iznos - popust) * 5 / 100 + popust
            console.log(`Vas racun je ${iznos}, ali firme imaju VIKEND popust od ${popust_vikend} i treba da platite ${iznos - popust_vikend} `)
        }
        else {
            console.log(`Vas racun je ${iznos} dinara. Zelimo prijatan vikend`)
        }
        break
    default:
        console.log(`Vas racun je ${iznos} dinara. `)
}