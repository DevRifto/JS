// load api :
const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

//displaying phones :
const displayPhones = (phones) => {
    const displayContainer = document.getElementById("displayContainer");
    displayContainer.textContent = '';
    phones.forEach((phone) => {
        const div = document.createElement("div");
        div.classList.add("col");
        console.log(phone);
        div.innerHTML = `
        <div class="card border-0 shadow p-4 rounded-5 flex-row">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      </div>
                      `;
                      displayContainer.appendChild(div);
                    });
};


// Btn load :
document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("input");
    const inputValue = input.value;
    loadPhones(inputValue);
});