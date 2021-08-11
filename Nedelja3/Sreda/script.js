/**
 * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
Ispis: "12345678987654321"
 */


function najduzipolindrom(niz) {
    let duzina = 0,
        polindrom = ''

    for (let i = 0; i < niz.length; i++) {
        let niz_1 = niz.substr(i, niz.length)

        for (let j = niz_1.length; j >= 0; j--) {
            let niz_2 = niz_1.substr(0, j)
            if (niz_2.length <= 1)
                continue
            if (niz_2.split('').reverse().join('') == niz_2) {
                if (niz_2.length > duzina) {
                    duzina = niz_2.length
                    polindrom = niz_2
                }
            }
        }
    }
    return polindrom
}

console.log(najduzipolindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"))
console.log(najduzipolindrom('abc1234321sfg'))
console.log(najduzipolindrom('gkhl;47trsanavolimilovanadgh58iu'))






/**
 * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
 *
 * 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
 *
 * 4. За првих 100 бројева исписати:
 *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
 *       Ако је дељив са 3,5,7 - FizzBuzzZazz
 *       3,5 - FizzBuzz
 *       3,7 - FizzZazz
 *       5,7 - BuzzZazz
 *
 * 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti"
 *
 */



// // 1. ZADATAK
// function sabiranjemnozenjeniz(niz) {
//     let sum = 0
//     let proizvod = 1
//     let novniz = []
//     for (let i = 0; i < niz.length; i++) {
//         sum += niz[i]
//         proizvod *= niz[i]
//     }
//     novniz.push([sum], [proizvod])
//     // novniz.push(sum, proizvod) //ovo je da se vrati sum i proizvod kao clanovi jednog niza
//     return novniz
// }
// let x = [4, 2, 5, 2]
// console.log(sabiranjemnozenjeniz(x))




// // 2. ZADATAK     sledeca funkcija nece isfiltrirati NaN. Ne znam da li je moguce NaN isfiltrirati na ovakav nacin pod uslovom da se iz niza ne izbace objekti

// function filtriranje(niz) {
//     let novniz = []
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == '' || niz[i] == undefined || niz[i] == NaN || niz[i] == 0 || niz[i] == false || niz[i] == true) {
//             continue
//         }
//         else {
//             novniz.push(niz[i])
//         }
//     }
//     console.log(novniz)
// }
// let x = [3, NaN, 5, undefined, '', 'AAA', [2, 'q'], null, 0, true, false]
// filtriranje(x)



// //RESENJE pomocu filter funcije

// let x = [3, NaN, 5, undefined, '', 'AAA', [2, 'q'], null, 0, true, false]
// let y = x.filter(Boolean)
// console.log(y)



// // 4. ZADATAK

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(`${i} - Fizz`);
//     }
//     if (i % 5 == 0) {
//         console.log(`${i} - Buzz`);
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} - FizzBuzz`);
//     }
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
//         console.log(`${i} - FizzBuzzFazz`);
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} - FizzBuzz`);
//     }
//     if (i % 3 == 0 && i % 7 == 0) {
//         console.log(`${i} - FizzFazz`);
//     }
//     if (i % 5 && i % 7) {
//         console.log(`${i} - BuzzFazz`);
//     } else {
//         console.log(i);
//     }
// }



// //5. ZADATAK

// let x = 5
// let y = 9
// console.log(x, y) // x,y pre zamene
// x = x + y
// y = x - y
// x = x - y
// console.log(x, y) // x, y posle zamene