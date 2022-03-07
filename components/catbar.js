const CatBar = (element, AllData) => {
  const data = AllData.slice(0, 13);
  let main = document.createElement("div");
  let div = document.createElement("div");
  div.classList.add("tagDiv");
  div.classList.add("featured");
  div.style.background = "rgb(2, 123, 137)";
  div.innerHTML = `
  <img src="https://i.imgur.com/1fDftsZ_d.jpg?maxwidth=800&shape=thumb&fidelity=high"/>
   <div>
    <h1>
     Comic
    </h1>
    <p>FEATURED 234394 Posts </p>
   </div>
  `;
  div.addEventListener("click", () => {
    window.location.href = "tag.html?tag=comic";
  });
  main.append(div);

  data.map((d) => {
    let div = document.createElement("div");
    div.classList.add("tagDiv");
    div.style.background = "#" + d.accent;
    let posts = d.total_items;
    div.innerHTML = `
    <img src="https://i.imgur.com/${d.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high"/>
     <div>
      <h1>
      ${d.display_name}
      </h1>
      <p>${posts} Posts </p>
     </div>
    `;
    div.addEventListener("click", () => {
      window.location.href = "tag.html?tag=" + d.display_name.toLowerCase();
    });
    main.append(div);
  });

  element.append(main);
};

export default CatBar;
