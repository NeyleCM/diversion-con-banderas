//countries-list
const countriesList = document.getElementById("countries-list")
const info = document.getElementById("info")
//PROMESA con fetch
// fetch("https://restcountries.com/v3/all")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log("Esdte es el error", err))
const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3/all")
    const countries = await response.json()
    sortedCountries(countries)
    return countries
  } catch (err) {
    console.log("este es el error", err)
  }
}
const sortedCountries = (countries) => {
  countries.sort((a, b) => {
    const nameA = a.name.official.toUpperCase()
    const nameB = b.name.official.toUpperCase()
    return nameA.localeCompare(nameB)
  })
}
getCountries().then(countries => {
  countries.forEach((country, index) => {
    let template = `
      <div class="card">
      <img src=${country.flags[0]} alt=${country.name.official} />
      <h2>${country.name.official}</h2>
      </div>
    `
    countriesList.insertAdjacentHTML("beforeend", template)
    const card = document.querySelectorAll(".card")[index]
    card.addEventListener("click", () => {
      let templateInfo = `
      <div class="infodetalle">
        <img src=${country.flags[0]} alt=${country.name.official} />
        <h2>${country.name.official}</h2>
        <button onclick="closeInfo()">cerrar</button>
        </div>
        `
        info.innerHTML = templateInfo
        info.classList.add("visible")
      })
    });
  })
const closeInfo = () => info.classList.remove("visible")