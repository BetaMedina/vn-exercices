import { DATASET } from "./dataset.js"

// Count dataset \\
const countCountries = () => DATASET.reduce((prev, _) => prev += 1, 0)
console.log(countCountries())

//country with the most official languages, where they officially speak German \\
const mostOficialLanguagesWithGerman = () => DATASET.reduce((prev, cur) => {
  if (cur.languages.length > prev.languagesQuantity && cur.languages.includes('de')) {
    prev.contryName = cur.country
    prev.languagesQuantity = cur.languages.length
  }
  return prev
}, {
  languagesQuantity: 0,
  contryName: ''
})
console.log(mostOficialLanguagesWithGerman())

// that counts all the official languages spoken in the listed countries \\
const countAllLanguages = () => DATASET.reduce((prev, cur) => {
  cur.languages.map(lang => prev.set(lang))
  return prev
}, new Map).size

console.log(countAllLanguages())

const countCountryLanguages = () => DATASET.reduce((prev, cur) => {
  prev.push({ countryName: cur.country, languagesQuantity: cur.languages.length })
  return prev
}, [])
console.log(countCountryLanguages())

// to find the country with the highest number of official languages \\

const countryWithHighestLanguages = () => DATASET.reduce((prev, cur) => {
  if (cur.languages.length > prev.totalLanguages) {
    prev.contryName = cur.country
    prev.totalLanguages = cur.languages.length
  }
  return prev
}, { contryName: '', totalLanguages: 0 })
console.log(countryWithHighestLanguages())


// to find the most common official language(s), of all countries \\
const orderLanguagesAndOccurrence = () => DATASET.reduce((prev, cur) => {
  cur.languages.map(lang => {
    if (prev.has(lang)) {
      prev.set(lang,prev.get(lang) + 1)
      return prev
    }
    prev.set(lang, 1)
    return prev
  })
  return prev
}, new Map)

const getTheMostlyUsedLanguage = (map) => [...map.entries()].reduce((prev, cur) => cur[1] > prev[1] ? cur : prev)
console.log(getTheMostlyUsedLanguage(orderLanguagesAndOccurrence()))