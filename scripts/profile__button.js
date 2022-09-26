const popupOpenButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector(".popup__button-save");

let nameInput = popup.querySelector(".form__item_name");
let descriptionInput = popup.querySelector(".form__item_composition");
let userName = document.querySelector(".popup_item_name");
let userDescription = document.querySelector(".popup_item_composition");

function popupToggle() {
    popup.classList.toggle('popup__opened');
}
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

function popupSave(evt){
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = descriptionInput.value;
}

popupSaveButton.addEventListener('submit', popupSave);