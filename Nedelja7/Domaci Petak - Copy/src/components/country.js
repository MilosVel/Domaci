import { tmp1 } from '../index.js'
import Countries from './countries.js'

let countryDiv = document.createElement('div')

let counter = 0

function Country(country) {

    let img = document.createElement('img')
    img.src = country.flag

    // let pocetniIndex = tmp1.findIndex(drzava => drzava.name == country.name)

    click1(img, country)

    let pName = document.createElement('p')
    pName.textContent = country.name
    let pCapital = document.createElement('p')
    pCapital.textContent = country.capital

    countryDiv.append(img, pName, pCapital, document.createElement('hr'))

    return countryDiv

}

export default Country



function click1(element, country) {

    element.addEventListener('click', () => {

        let index = tmp1.indexOf(country)

        if (element.value == 1) {
            counter++
            index += counter
        }
        else if (element.value == -1) {
            counter--
            index += counter
        }

        // console.log(index)

        document.querySelector('#country').innerHTML = ''

        countryDiv.innerHTML = ''

        let img = document.createElement('img')
        img.src = tmp1[index].flag

        let pName = document.createElement('p')
        pName.textContent = tmp1[index].name
        let pCapital = document.createElement('p')
        pCapital.textContent = tmp1[index].capital

        let pPopulation = document.createElement('p')
        pPopulation.innerHTML = `Country has ${tmp1[index].population} citizens`

        let pTimeZone = document.createElement('p')
        pTimeZone.textContent = `Time zone of ${tmp1[index].name} is ${tmp1[index].timezones}`

        //console.log(country.languages.map(language => language.name))

        let pLanguages = document.createElement('p')
        pLanguages.innerHTML = `Languages of ${tmp1[index].name} are: `
        let text = tmp1[index].languages.map(language => language.name)
        console.log(text)
        for (let i = 0; i < text.length; i++) {
            if (i + 1 == text.length) {
                let span1 = document.createElement('span')
                span1.textContent = text[i] + '.'
                pLanguages.append(span1)
                break
            }
            let span = document.createElement('span')
            span.textContent = text[i] + ', '
            pLanguages.append(span)
        }



        let btnPreview = document.createElement('button')
        btnPreview.textContent = 'Preview'
        btnPreview.value = -1

        click1(btnPreview, country)


        let btnNext = document.createElement('button')
        btnNext.textContent = 'Next'
        btnNext.value = 1

        click1(btnNext, country)


        let btnBack = document.createElement('button')
        btnBack.textContent = 'Back'
        btnBack.addEventListener('click', () => {
            countryDiv.innerHTML = ''
            Countries(tmp1)
        })

        countryDiv.append(img, pName, pCapital, pPopulation, pTimeZone, pLanguages, btnPreview, btnNext, btnBack, document.createElement('hr'))
        document.querySelector('#country').append(countryDiv)

    })
}
