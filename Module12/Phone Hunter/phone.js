const loadMobiles = async (serchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${serchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displaMobile(data.data, dataLimit);
};
// Display All Devices :
const displaMobile = (mobile, dataLimit) => {
  const mobileContainer = document.getElementById("mobileContainer");
  const error = document.getElementById("errorImage");
  mobileContainer.textContent = "";

  // show More :
  const showMoreBtn = document.getElementById("showMoreBtn");
  if (dataLimit && mobile.length > 6) {
    mobile = mobile.slice(0, 6);
    showMoreBtn.classList.remove("d-none");
  } else {
    showMoreBtn.classList.add("d-none");
  }
  // Error message :
  if (mobile.length === 0) {
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");
  }
  mobile.forEach((mobiles) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="col">
        <div class="card p-3 rounded-5">
            <img src="${mobiles.image}" class="card-img-top " alt="...">
        <div class="card-body">
                <h5 class="card-title">${mobiles.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick = "loadMobileDetails('${mobiles.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show Details
                </button
        </div>
        </div>
        </div>`;
    mobileContainer.appendChild(div);
  });
  spiner(false);
};
// Search Prossesing :
const searchProsses = (dataLimit) => {
  spiner(true);
  const input = document.getElementById("input");
  const inputValue = input.value;
  loadMobiles(inputValue, dataLimit);
};

// Search Button :
document.getElementById("btn").addEventListener("click", function () {
  searchProsses(6);
});
// Enter Button :
document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    searchProsses(6);
  }
});

// Loading Animation :
const spiner = (isLoading) => {
  const spinerIcon = document.getElementById("spiner");
  if (isLoading) {
    spinerIcon.classList.remove("d-none");
  } else {
    spinerIcon.classList.add("d-none");
  }
};

// Show More :
document.getElementById("showMoreBtn").addEventListener("click", function () {
  searchProsses();
});

// Mobile Details :
const loadMobileDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMobileDetails(data.data);
};

// Display Phone Details :
const displayMobileDetails = (phone) => {
    console.log(phone);
    const modalContainer = document.getElementById('exampleModalLabel');
    modalContainer.innerHTML = `<h2>${phone.name}</h2>`;
    const phoneDetails = document.getElementById('phoneDetails');
    phoneDetails.innerHTML = `
    <p>${phone.releaseDate ? phone.releaseDate : 'No Date Found'}</p>
    <p>${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'Storage Data Error'}</p>
    <p>${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'Storage Data Error'}</p>
    `;
    

};