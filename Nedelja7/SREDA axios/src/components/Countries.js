import Country from "./Country.js"

const Countries = (countries) => countries.map(country => Country(country))

export default Countries
