const loadUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayUser(data.results));
};
const displayUser = (users) => {
  const usersContainer = document.getElementById("usersContainer");
  for (const user of users) {
    const userDiv = document.createElement("div");
    console.log(user);
    userDiv.classList.add("user");
    userDiv.innerHTML = `
    <h3>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3> 
    <p>Email : ${user.email}</p>
    <p>Loaction : ${user.location.city}, ${user.location.country}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
};
loadUser();
