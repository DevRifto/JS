const loadMeals = (serch) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serch}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
};

const displayFood = (meals) => {
  const displayFoodBox = document.getElementById("displayFood");
  displayFoodBox.innerHTML = ``;
  meals.forEach((meal) => {
    const div = document.createElement("div");
    console.log(meal);
    div.classList.add("col");
    div.innerHTML = `
    <div class="col">
    <div onclick='foodDetails(${meal.idMeal})' class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3>${meal.strMeal}</h3>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
    </div>
    </div>
    `;
    displayFoodBox.appendChild(div);
  });
};

const foodDetails = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.meals[0].strYoutube));
};
const serchFood = () => {
  const input = document.getElementById('input');
  const inputValue = input.value;
  loadMeals(inputValue);
  input.value = '';
};

loadMeals('');
