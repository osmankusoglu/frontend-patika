
let btnContainer = document.querySelector(".btn-container")
let btnCategory = ["All", "Korea", "Japan", "China"]


btnCategory.forEach(item => {

  const btn = document.createElement("button");

  btn.textContent = item;

  btn.classList.add("btn", "btn-outline-dark", "btn-item");

  btnContainer.appendChild(btn); 


  btn.addEventListener("click", function() {

    let btnCategory = this.textContent;

    let selectedMenu;
    if (btnCategory === "All") {
      selectedMenu = menu;
    } else {
      selectedMenu = menu.filter(item => item.category === btnCategory); 
    }

    showMenu(selectedMenu);
  });
});
function showMenu(menuItems) {

  const divParent = document.querySelector("#divParent");

  divParent.innerHTML = "";

  menuItems.forEach(item => {
    const menuItem = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div>
    `;
    divParent.innerHTML += menuItem; 
  });
}

showMenu(menu);