// making funtion that returns input value :
const getInputValueById = (id) => {
  const input = document.getElementById(id);
  const inputValue = input.value;
  input.value = "";
  return inputValue;
};

// product name :
const addProduct = () => {
  const product = getInputValueById("product");
  const quantity = getInputValueById("quantity");
  //sending to display in ui/li :
  displayUi(product, quantity);
  // set to local storage :
  // localStorage.setItem(product, quantity );
  saveToLocalStorage(product, quantity);

};
//  Diplaying Ui :
const displayUi = (product, quantity) => {
  const ui = document.getElementById("product-container");
  const li = document.createElement("li");
  li.classList.add('box')
  li.innerText = `${product} ${quantity}`;
  ui.appendChild(li);
};

//cheak cart :
const getCart = () => {
  let savedCart = localStorage.getItem('cart')
  let cart = {};
  if (savedCart){
    cart = JSON.parse(savedCart);
  }
  return cart;
};

// save to local storage :
const saveToLocalStorage = (product,quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};
