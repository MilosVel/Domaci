import axios from 'axios'


import { getAllCountries } from './service.js'
import Countries from './components/countries.js'
import Country from './components/country.js'


let tmp = []
export let tmp1 = tmp

getAllCountries().then(res => {
    for (let i = 0; i < 15; i++) {
        let broj = Math.ceil(Math.random() * res.data.length)
        // console.log(broj)
        tmp.push(res.data[broj])
    }
    // console.log(tmp)
    document.querySelector('#country').append(...Countries(tmp))
    // document.querySelector('#country').append(Country(tmp[2]))
})







