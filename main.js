let maindiv = document.querySelector(".common-comments");
fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      let div = `
       <div class="user-message">
       <p class="title">Name: ${item.title}"</p>
       <p class="user-email">url: ${item.url}"</p>
       <p class="user-comment">thumbnailUrl: ${item.thumbnailUrl}"</p>
     </div>
     `;
      maindiv.innerHTML += div;
    })
  );
