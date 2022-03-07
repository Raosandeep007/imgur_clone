window.addEventListener("DOMContentLoaded", (event) => {
  let input = document.querySelector(".searchbar");
  let searchRes = document.querySelector(".searchResult");
  input.addEventListener("input", function (e) {
    if (e.target.value.length > 0) debouncing(e.target.value);
    else searchRes.classList.add("none");
  });
  input.addEventListener("focus", function () {
    searchRes.classList.remove("none");
  });

  document.querySelector(".searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  input.addEventListener("keypress", function (e) {});

  async function search(value) {
    let res = await fetch(
      `https://api.imgur.com/3/suggest?client_id=546c25a59c58ad7&inflate=tags&q=${value}&types=users%2Ctags%2Cposts`
    );
    let data = await res.json();
    showDataToSearchRes(data.data);
  }
  let id;

  function debouncing(value) {
    clearInterval(id);
    id = setTimeout(() => {
      search(value);
    }, 1000);
  }

  function showDataToSearchRes({ tags }) {
    searchRes.innerHTML = "";
    tags.map((tag) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("postsRes");
      let imgDiv = document.createElement("div");
      imgDiv.style.background = `url('https://i.imgur.com/${tag.background_hash}.jpg?maxwidth=300&shape=thumb&fidelity=high')`;
      let h3 = document.createElement("h3");
      h3.innerText = tag.name;
      postDiv.append(imgDiv, h3);
      searchRes.appendChild(postDiv);
      postDiv.addEventListener("click", () => {
        console.log("d");
        window.location.href = "tag.html?tag=" + tag.name;
      });
    });
  }
});
