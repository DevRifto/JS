function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postBox = document.getElementById("postContainer");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
                <h1>User-${post.userId}</h1>
                <h2>post : ${post.title}</h2>
                <p>post ${post.body}</p>
            `;
    postBox.appendChild(postDiv);
  }
}
loadPost();
