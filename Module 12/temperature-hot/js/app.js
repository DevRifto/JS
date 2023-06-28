// don't Show Api Key Publickly ! :

const API_KEY = `72ba5150bd70889cce5bddd94c8c5f35`;

const loadTemprature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayTempInfo(data);
};
//display Temp :
const displayTempInfo = (temp) => {
  const tempContainer = document.getElementById("temp");
  tempContainer.innerText = temp.main.temp;
};

  document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("input");
    const inputValue = input.value;
    document.getElementById('countryName').innerText = inputValue;
    loadTemprature(inputValue);
  });
