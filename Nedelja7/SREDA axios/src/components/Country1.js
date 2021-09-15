let Country1 = (country) => {
    let divCountry1 = document.createElement('div')

    let p1 = document.createElement('p')
    p1.textContent = country.name

    const img1 = document.createElement('img')
    img1.src = country.flag
    img1.alt = `Flag of ${country.name}`

    let p2 = document.createElement('p')
    p2.textContent = country.nativeName

    let p3 = document.createElement('p')
    p3.textContent = `${country.name} has ${country.population} citizens`

    let p4 = document.createElement('p')
    p4.textContent = `Capital city is ${country.capital}`


    let p5 = document.createElement('p')
    p5.textContent = `Inernet domen  is " ${country.topLevelDomain}"`

    let p6 = document.createElement(p6)
    p6.textContent = `${country.name} se granici sa :`
    let listBorders = document.createElement('ul')
    for (let i = 0; i < country.borders.length; i++) {
        let li = document.createElement('li')
        li.textContent = country.borders[i]
        listBorders.append(li)
    }

    let p7 = document.createElement('p')

    let divCurrencies = document.createElement('div')
    for (let i = 0; i < country.currencies.length; i++) {
        let p = document.createElement('p')
        p.textContent = ` Valuta ${country.name} je ${country.currencies[i].name}`
        divCurrencies.append(p)
    }

    divCountry1.append(p1, img1, p2, p3, p4, p5, p6, listBorders, p7, divCurrencies)

    return divCountry1

}

export default Country1