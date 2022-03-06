const CatBar = (element, AllData) => {
  const data = AllData.slice(0, 13);
  let main = document.createElement("div");

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
    main.append(div);
  });

  element.append(main);
};

export default CatBar;
