const btntoggle = document.querySelector(".btn");
const menu = document.querySelector(".nav");

btntoggle.addEventListener("click", () => {
    menu.classList.toggle("nav-visibility");
});
