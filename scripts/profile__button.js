const popupOpenButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

let nameInput = popup.querySelector(".form__item_name");
let descriptionInput = popup.querySelector(".form__item_composition");
let userName = document.getElementById("name");
let userDescription = document.getElementById("composition");
let form = document.querySelector(".popup__container")


function popupToggle() {
    popup.classList.toggle('popup__opened');
}
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

function popupSave(evt){
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = descriptionInput.value;
    console.log(userName);
}

form.addEventListener('submit', popupSave);