
const Country = (country)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    divCountry.append(p,img,document.createElement('hr'))

    return divCountry
}

export default Country