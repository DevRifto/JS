const loadCountrys = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountrys(data));
};
const displayCountrys = (countrys) => {
  const displayCountrys = document.getElementById("displayCountrys");
  //   for(const country of countrys){
  //     console.log(country);
  //   }
  countrys.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add('css');
    countryDiv.innerHTML = `
    <h1>${country.name.common}</h1>
    <h3>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</h3>
    <button onclick="countryCode('${country.cca2}')">Country Code</button>
    `;
    displayCountrys.appendChild(countryDiv);
  });
};

const countryCode = (code) => {
    console.log(code);
}
loadCountrys();
