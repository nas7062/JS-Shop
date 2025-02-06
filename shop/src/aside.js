const cateBtn = document.querySelector(".category");
const asideBar = document.querySelector("#aside-bar");

cateBtn.addEventListener("click", () => {
  if (asideBar.classList.contains("active")) {
    asideBar.classList.remove("active");
    asideBar.classList.add("nagative");
  } else {
    asideBar.classList.add("active");
  }
});
