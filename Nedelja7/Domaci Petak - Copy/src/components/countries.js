
import Country from "./country.js"

const Countries = (countries) => {

    return countries.map(country => Country(country))

}

export default Countries