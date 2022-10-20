const popupOpenButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

let profileName = document.querySelector(".profile__info_brand");
let profileAboutMe = document.getElementsByName("profileComposition");
let userName = document.getElementsByName('name');
let userDescription = document.getElementById("composition");
let form = document.querySelector('.form');


function popupOpen() {
    popup.classList.toggle('popup_opened');
    userName.value = "Жак-Ив Кусто";
    profileName.value = "Жак-Ив Кусто";
    userDescription.value = "Исследователь океана";
    profileAboutMe.value = "Исследователь океана";

}

function popupClose() {
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

function popupSave(evt) {
    evt.preventDefault();
    profileName.textContent = userName.value;
    
    popupClose();
}


form.addEventListener('submit', popupSave);