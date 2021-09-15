import Countries from "./components/Countries";
import Country from "./components/Country";
import { getAllCountries } from "./service";
import { divSelect, inputFilter } from './constants'
import Country1 from "./components/Country1";

const generateSelect = (countries) => {

    let options = new Set(countries.map(country => country.region))

    let select = document.createElement('select')
    let defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.textContent = 'izaberi region'
    defOpt.selected = true
    defOpt.disabled = true

    select.append(defOpt)

    options.forEach((option) => {
        const opt = document.createElement('option')
        opt.textContent = `${option}`
        opt.value = option
        select.append(opt)
    })

    select.addEventListener('change', () => {

        let tmp = countries.filter(country => country.region == select.value)
        document.querySelector('main').innerHTML = ''

        document.querySelector('main').append(...Countries(tmp))

    })
    divSelect.append(select)

}




let countries = []

getAllCountries().then(res => {
    countries = res.data
    document.querySelector('main').append(...Countries(countries))
    generateSelect(countries)


    inputFilter.addEventListener('input', () => {

        let filter = countries.filter(country => country.name.toLowerCase().includes(inputFilter.value.trim().toLowerCase()))

        if (filter.length == 1) {
            document.querySelector('main').innerHTML = ''
            document.querySelector('main').append(Country1(filter[0]))

        } else {
            document.querySelector('main').innerHTML = ''
            document.querySelector('main').append(...Countries(filter))
        }

        //generateSelect(filter)
    })

})









let select1 = document.createElement('select')

let defOpt1 = document.createElement('option')
defOpt1.textContent = 'Izabrati opciju sortiranja'
defOpt1.value = '-2'
defOpt1.selected = true
defOpt1.disabled = true

let optGrad = document.createElement('option')
optGrad.value = 'capital'
optGrad.textContent = 'capital'

let optIme = document.createElement('option')
optIme.valu = 'name'
optIme.textContent = 'name'
let optRegion = document.createElement('option')
optRegion.textContent = 'region'
optRegion.value = 'region'

select1.append(defOpt1, optIme, optGrad, optRegion)

let header = document.querySelector('header')
header.append(select1)


select1.addEventListener('change', () => {
    // console.log(select1.value)

    if (select1.value == 'name') {
        countries.sort(function (b, a) {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
        console.log(countries)

        document.querySelector('main').innerHTML = ''
        document.querySelector('main').append(...Countries(countries))
    }

    if (select1.value == 'capital') {
        countries.sort(function (b, a) {
            if (a.capital > b.capital) return 1
            if (a.capital < b.capital) return -1
            return 0
        })
        console.log(countries)

        document.querySelector('main').innerHTML = ''
        document.querySelector('main').append(...Countries(countries))
    }

    if (select1.value == 'region') {
        countries.sort(function (b, a) {
            if (a.region > b.region) return 1
            if (a.region < b.region) return -1
            return 0
        })
        console.log(countries)

        document.querySelector('main').innerHTML = ''
        document.querySelector('main').append(...Countries(countries))
    }
})



