const countriesList = document.getElementById('countries-list')
const ulList = document.getElementById('ul-list')
const imageandcountry1 = document.getElementById('imageandcountry1')
const imageandcountry2 = document.getElementById('imageandcountry2')
const imgFlag = document.getElementById('imgFlag')

const getCountry = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3/all');
      if (!response.ok) {
        throw new Error('Ha surgido un error', response.status);
      }
      const data = await response.json();
      const sortC = sortCountries(data)
      allCountries(sortC);
        } 
        catch (error) {
        console.log('Error al obtener los datos', error);
      }};

const sortCountries = (countries) => {
      countries.sort((a,b) => {
         const aName = a.name.common.toUpperCase();
         const bName = b.name.common.toUpperCase();
         return aName.localeCompare(bName);
 })
 return countries;
 }
      const allCountries = (countries) => {
        countriesList.innerHTML = '';
      countries.forEach((country) => {
        const {flags, name} = country;
        const template1 = `<li>
          <div class="countryData">
          <img src='${flags[1]}' alt='${name.common}' id="imgFlag" class="imgFlag">
          <p><span>${name.common}</span></p>
          </div>
          <li>
        `   
    countriesList.innerHTML += template1;
    });

      const countryInfoContainer = document.createElement('div');
    countryInfoContainer.classList.add('country-info');


  imgFlag.addEventListener('click', () => { 
    countryInfoContainer.innerHTML = '';
    countries.forEach((country) => {
        const {flags, name, capital, population, car} = country;
    const template2 = `
            <div id="countriesData">
              <p><span>${name.common}</span></p>
              <p><span>Capital:</span> ${capital[0]}</p>
              <p><span>Población:</span> ${population}</p>
              <p><span>Lado de la carretera:</span> ${car.side}</p>
            </div>
            <img src='${flags[1]}' alt='${name.common}'/>
        `    
countryInfoContainer.innerHTML += template2
    })
    imageandcountry2.innerHTML = '';
    imageandcountry2.appendChild(countryInfoContainer);
    })
 }
getCountry()




// Desde aquí uno

/*  
const countriesList = document.getElementById('countries-list')
const ulList = document.getElementById('ul-list')
const imageandcountry1 = document.getElementById('imageandcountry1')
const imageandcountry2 = document.getElementById('imageandcountry2')



const getCountry = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3/all');
      if (!response.ok) {
        throw new Error('Ha surgido un error', response.status);
      }
      const data = await response.json();
      const sortC = sortCountries(data)
      allCountries(sortC);
        } 
        catch (error) {
        console.log('Error al obtener los datos', error);
      }};

const sortCountries = (countries) => {
      countries.sort((a,b) => {
         const aName = a.name.common.toUpperCase();
         const bName = b.name.common.toUpperCase();
         return aName.localeCompare(bName);
 })
 return countries;
 }

 const imgFlag = document.getElementById('imgFlag')

 const allCountries = (countries) => {
    countriesList.innerHTML = '';
  countries.forEach((country) => {
    const img = document.createElement('img');
    img.src = flags[1]; // Establecer la fuente de la imagen
    img.alt = name.common;
    img.id = imgFlag;
    const {flags, name} = country;
    const template1 = `
      <div class="countryData">
       ${img.outerHTML}
      </div>
      <p><span>${name.common}</span></p>
    `   
    countriesList.innerHTML += template1;
});


    imgFlag.addEventListener('click', () => { 
    imageandcountry2.innerHTML = '';
    countries.forEach((country) => {
        const {flags, name, capital, population, car} = country;
    
    const template2 = `
            <div class="countriesData">
              <p><span>${name.common}</span></p>
              <p><span>Capital:</span> ${capital[0]}</p>
              <p><span>Población:</span> ${population}</p>
              <p><span>Lado de la carretera:</span> ${car.side}</p>
            </div>
            <img src='${flags[1]}' alt='${name.common}'/>
        `    
imageandcountry2.innerHTML += template2
    })
    })
 }
getCountry()
 */