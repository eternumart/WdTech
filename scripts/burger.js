const burger = document.querySelector(".header__burger");
const headerContent = document.querySelector(".header__content");
const menuCloseIco = document.querySelector(".header__burger-close");
const burgerLinks = document.querySelectorAll(".header__link");

burger.addEventListener("click", openMenu);
menuCloseIco.addEventListener("click", closeMenu);
burgerLinks.forEach(link => {
    link.addEventListener("click", closeMenu)
})

function openMenu(){
    headerContent.classList.add("header__content_opened");
}

function closeMenu() {
    headerContent.classList.remove("header__content_opened")
}