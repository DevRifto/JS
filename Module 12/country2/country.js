const loadCountrys = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countrys) => {
  const displayBox = document.getElementById("displayCountry");
  countrys.forEach((country) => {
    const div = document.createElement("div");
    console.log(country);
    div.classList.add("box");
    div.innerHTML = `
    <h1>${country.name.common} (${country.cca2})</h1>
    <h2>${country.capital}</h2>
    <button id = 'btn' onclick = flag('${country.cca2}')>Details</button>
    `;
    displayBox.appendChild(div);
  });
};

const flag = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayFlag(data[0]));
};

const displayFlag = (country) => {
  const flag = document.getElementById('flag');
  flag.classList.add('flag');
  flag.innerHTML = `
  <h1>${country.name.common}</h1>
  <img src = "${country.flags.png}">
  `;
};

loadCountrys();
