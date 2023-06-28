function load() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => display(data));
}
function display(data) {
  const blockquote = document.getElementById("blockquote");
  blockquote.innerText = data.quote;
}

` `