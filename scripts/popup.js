const page = document.querySelector(".page");
const pagePopups = document.querySelectorAll(".popup");
const pageMoreBtns = document.querySelectorAll(".variants__link");
const pageClosePopupBtns = document.querySelectorAll(".popup__close-ico");

pageMoreBtns.forEach((button) => {
	button.addEventListener("click", openPopup);
});

pageClosePopupBtns.forEach(button => {
    button.addEventListener("click", closePopup);
})

function openPopup(evt) {
	const id = evt.target.id;

	pagePopups.forEach((popup) => {
		if (popup.id === id) {
			popup.classList.add("popup_opened");
            popup.addEventListener("click", handleOverlayClick);
            window.addEventListener("keydown", closeByEscape);
            page.classList.add("page_noscroll");
		}
	});
}

function closePopup () {
    const popupOpened = document.querySelector(".popup_opened");
    
    popupOpened.classList.remove("popup_opened");
    popupOpened.removeEventListener("click", handleOverlayClick);
    page.classList.remove("page_noscroll");
    window.removeEventListener("keydown", closeByEscape);
}

function handleOverlayClick(event) {
	if (event.type === "click") {
		if (event.target === event.currentTarget) {
			closePopup(event.target);
		}
	}
}

function closeByEscape(event) {
	if (event.key === "Escape") {
		// const openedPopUp = document.querySelector(".popup_opened");
		closePopup();
	}
}